// src/components/dashboard/admin/Settings.tsx
'use client';

import { useState } from 'react';
import { 
  Save,
  Shield,
  Bell,
  Mail,
  DollarSign,
  Users,
  Settings as SettingsIcon,
  AlertCircle
} from 'lucide-react';

interface SettingsState {
  general: {
    platformName: string;
    supportEmail: string;
    platformDescription: string;
  };
  security: {
    twoFactorAuth: boolean;
    passwordPolicy: boolean;
    loginAttempts: number;
  };
  notifications: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    marketingEmails: boolean;
  };
  email: {
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    smtpPassword: string;
  };
  payments: {
    stripeLive: string;
    stripeTest: string;
    paymentMethods: string[];
  };
  roles: {
    roles: Array<{ id: number; name: string; permissions: string[] }>;
  };
}

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState<SettingsState>({
    general: {
      platformName: 'Influence Connect',
      supportEmail: 'support@influenceconnect.com',
      platformDescription: 'Connect brands with influencers...',
    },
    security: {
      twoFactorAuth: false,
      passwordPolicy: true,
      loginAttempts: 3,
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      marketingEmails: false,
    },
    email: {
      smtpHost: 'smtp.example.com',
      smtpPort: '587',
      smtpUser: 'smtp@example.com',
      smtpPassword: '********',
    },
    payments: {
      stripeLive: 'pk_live_xxx',
      stripeTest: 'pk_test_xxx',
      paymentMethods: ['credit_card', 'paypal'],
    },
    roles: {
      roles: [
        { id: 1, name: 'Admin', permissions: ['all'] },
        { id: 2, name: 'Manager', permissions: ['read', 'write'] },
        { id: 3, name: 'User', permissions: ['read'] },
      ],
    },
  });

  const handleSave = () => {
    // Implement API call to save settings
    console.log('Saving settings:', settings);
    // Show success toast
    alert('Settings saved successfully!');
  };

  const updateSettings = (tab: string, data: any) => {
    setSettings(prev => ({
      ...prev,
      [tab]: { ...prev[tab as keyof SettingsState], ...data },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Platform Settings</h1>
          <p className="text-gray-500">Manage platform configuration and settings</p>
        </div>
      </div>

      {/* Settings Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'general', label: 'General', icon: SettingsIcon },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'email', label: 'Email', icon: Mail },
            { id: 'payments', label: 'Payments', icon: DollarSign },
            { id: 'roles', label: 'User Roles', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <tab.icon className={`
                h-5 w-5 mr-2
                ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}
              `} />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">General Settings</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Platform Name
                </label>
                <input
                  type="text"
                  value={settings.general.platformName}
                  onChange={(e) => updateSettings('general', { platformName: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Support Email
                </label>
                <input
                  type="email"
                  value={settings.general.supportEmail}
                  onChange={(e) => updateSettings('general', { supportEmail: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Platform Description
                </label>
                <textarea
                  rows={4}
                  value={settings.general.platformDescription}
                  onChange={(e) => updateSettings('general', { platformDescription: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Require 2FA for all admin accounts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.security.twoFactorAuth}
                    onChange={(e) => updateSettings('security', { twoFactorAuth: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Password Policy</h3>
                  <p className="text-sm text-gray-500">Enforce strong password requirements</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.security.passwordPolicy}
                    onChange={(e) => updateSettings('security', { passwordPolicy: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Maximum Login Attempts
                </label>
                <input
                  type="number"
                  value={settings.security.loginAttempts}
                  onChange={(e) => updateSettings('security', { loginAttempts: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Notification Settings</h2>
            <div className="space-y-4">
              {[
                { id: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                { id: 'pushNotifications', label: 'Push Notifications', description: 'Receive push notifications' },
                { id: 'marketingEmails', label: 'Marketing Emails', description: 'Receive marketing and promotional emails' },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{item.label}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications[item.id as keyof typeof settings.notifications]}
                      onChange={(e) => updateSettings('notifications', { [item.id]: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'email' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Email Configuration</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { id: 'smtpHost', label: 'SMTP Host', type: 'text' },
                { id: 'smtpPort', label: 'SMTP Port', type: 'text' },
                { id: 'smtpUser', label: 'SMTP Username', type: 'text' },
                { id: 'smtpPassword', label: 'SMTP Password', type: 'password' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={settings.email[field.id as keyof typeof settings.email]}
                    onChange={(e) => updateSettings('email', { [field.id]: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Payment Settings</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Stripe Live Key
                </label>
                <input
                  type="text"
                  value={settings.payments.stripeLive}
                  onChange={(e) => updateSettings('payments', { stripeLive: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Stripe Test Key
                </label>
                <input
                  type="text"
                  value={settings.payments.stripeTest}
                  onChange={(e) => updateSettings('payments', { stripeTest: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Payment Methods
                </label>
                <div className="mt-2 space-y-2">
                  {['credit_card', 'paypal', 'bank_transfer'].map((method) => (
                    <label key={method} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        checked={settings.payments.paymentMethods.includes(method)}
                        onChange={(e) => {
                          const updatedMethods = e.target.checked
                            ? [...settings.payments.paymentMethods, method]
                            : settings.payments.paymentMethods.filter(m => m !== method);
                          updateSettings('payments', { paymentMethods: updatedMethods });
                        }}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {method.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">User Roles</h2>
            <div className="space-y-4">
              {settings.roles.roles.map((role) => (
                <div key={role.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{role.name}</h3>
                    <p className="text-sm text-gray-500">
                      Permissions: {role.permissions.join(', ')}
                    </p>
                  </div>
                  <button
                    className="text-sm text-blue-600 hover:text-blue-500"
                    onClick={() => {
                      // Implement edit role functionality
                      console.log('Edit role:', role);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ))}
              <button
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400"
                onClick={() => {
                  // Implement add role functionality
                  console.log('Add new role');
                }}
              >
                + Add New Role
              </button>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}