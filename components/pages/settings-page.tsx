"use client"

import React, { useState } from 'react';
import { User, Moon, Sun, Bell, Shield, HelpCircle, Camera, Check, Mail, Phone, Edit3, Trash2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface SettingsSwitchProps {
  title: string;
  description: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const SettingsSwitch: React.FC<SettingsSwitchProps> = ({
  title,
  description,
  checked = false,
  onCheckedChange
}) => (
  <div className="flex items-center justify-between group">
    <div className="space-y-1">
      <div className="text-sm font-medium text-white/90">{title}</div>
      <p className="text-xs text-white/60">{description}</p>
    </div>
    <button
      onClick={() => onCheckedChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${
        checked ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-white/20'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

const ModernCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0
}) => (
  <div
    className="relative group"
    style={{
      animation: `slideUp 0.6s ease-out ${delay}s both`
    }}
  >
    {/* Background glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Main card */}
    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 hover:border-white/20 transition-all duration-500">
      {children}
    </div>
  </div>
);

// ========================================
// MAIN SETTINGS COMPONENT
// ========================================
export const SettingsPage: React.FC = () => {
  // State management
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567'
  });
  const [notifications, setNotifications] = useState({
    email: true,
    atsScore: true,
    weeklyReports: false
  });

  // Event handlers
  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (key: keyof typeof notifications, value: boolean): void => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = (): void => {
    // Save logic here
    console.log('Saving settings...', formData);
  };

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* ========================================
          MAIN CONTAINER WITH DARK BACKGROUND
          ======================================== */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative z-10 p-6 max-w-7xl mx-auto">
          {/* ========================================
              PAGE HEADER
              ======================================== */}
          <div className="mb-12 text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-2xl shadow-blue-500/25"
              style={{ animation: 'slideUp 0.6s ease-out both' }}
            >
              <User className="h-10 w-10 text-white" />
            </div>
            <h1
              className="text-5xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent mb-4"
              style={{ animation: 'slideUp 0.6s ease-out 0.1s both' }}
            >
              Settings
            </h1>
            <p
              className="text-white/60 text-lg font-medium"
              style={{ animation: 'slideUp 0.6s ease-out 0.2s both' }}
            >
              Manage your account preferences with style
            </p>
          </div>

          {/* ========================================
              SETTINGS GRID
              ======================================== */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* ========================================
                PROFILE SETTINGS CARD
                ======================================== */}
            <ModernCard delay={0.3}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl">
                  <User className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Profile Settings</h3>
                  <p className="text-white/60 text-sm">Update your personal information</p>
                </div>
              </div>

              {/* Avatar Section */}
              <div className="flex flex-col items-center mb-10">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/30">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold text-white">
                      JD
                    </div>
                  </div>

                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </button>
                </div>

                <button className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-medium hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300">
                  Change Avatar
                </button>
                <p className="text-xs text-white/40 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: 'firstName' as keyof FormData, label: 'First Name', icon: User },
                    { id: 'lastName' as keyof FormData, label: 'Last Name', icon: User },
                    { id: 'email' as keyof FormData, label: 'Email Address', icon: Mail, type: 'email' },
                    { id: 'phone' as keyof FormData, label: 'Phone Number', icon: Phone }
                  ].map((field) => (
                    <div key={field.id} className="group">
                      <label className="block text-sm font-semibold text-white/90 mb-3">
                        {field.label}
                      </label>
                      <div className="relative">
                        <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-blue-400 transition-colors duration-300" />
                        <input
                          type={field.type || 'text'}
                          value={formData[field.id]}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-300"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSave}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-[1.02] transition-all duration-300"
                >
                  <Check className="inline h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </ModernCard>

            {/* ========================================
                APPEARANCE SETTINGS CARD
                ======================================== */}
            <ModernCard delay={0.4}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl">
                  <Moon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Appearance</h3>
                  <p className="text-white/60 text-sm">Customize how the app looks and feels</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/60">
                      <Sun className="h-4 w-4" />
                      <span className="text-sm">Light</span>
                    </div>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                        isDarkMode ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-white/20'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                          isDarkMode ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <div className="flex items-center gap-2 text-white/90">
                      <Moon className="h-4 w-4" />
                      <span className="text-sm">Dark</span>
                    </div>
                  </div>
                </div>
              </div>
            </ModernCard>

            {/* ========================================
                NOTIFICATIONS SETTINGS CARD
                ======================================== */}
            <ModernCard delay={0.5}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-2xl">
                  <Bell className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Notifications</h3>
                  <p className="text-white/60 text-sm">Configure your notification preferences</p>
                </div>
              </div>

              <div className="space-y-6">
                <SettingsSwitch
                  title="Email Notifications"
                  description="Receive updates about your resumes via email"
                  checked={notifications.email}
                  onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                />

                <div className="border-t border-white/10"></div>

                <SettingsSwitch
                  title="ATS Score Alerts"
                  description="Get notified when your ATS score changes"
                  checked={notifications.atsScore}
                  onCheckedChange={(checked) => handleNotificationChange('atsScore', checked)}
                />

                <div className="border-t border-white/10"></div>

                <SettingsSwitch
                  title="Weekly Reports"
                  description="Receive weekly summaries of your activity"
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => handleNotificationChange('weeklyReports', checked)}
                />
              </div>
            </ModernCard>

            {/* ========================================
                PRIVACY & SECURITY SETTINGS CARD
                ======================================== */}
            <ModernCard delay={0.6}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-2xl">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Privacy & Security</h3>
                  <p className="text-white/60 text-sm">Manage your privacy and security settings</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>Change Password</span>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <HelpCircle className="h-5 w-5 text-green-400" />
                  <span>Two-Factor Authentication</span>
                </button>

                <div className="border-t border-white/10 pt-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Danger Zone</h4>
                    <p className="text-xs text-white/40 mb-4">
                      This action cannot be undone. All your data will be permanently deleted.
                    </p>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300">
                    <Trash2 className="h-4 w-4" />
                    <span className="font-semibold">Delete Account</span>
                  </button>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
