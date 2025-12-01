import toast from 'react-hot-toast';

export const showToast = {
  success: (message: string) => toast.success(message, {
    icon: '😺',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }),
  error: (message: string) => toast.error(message, {
    icon: '😿',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }),
  info: (message: string) => toast(message, {
    icon: 'ℹ️',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }),
  // Custom events
  taskComplete: () => toast.success('Great job! Task complete! 🌟', {
    icon: '😻',
    duration: 2000,
  }),
  taskIncomplete: () => toast('Task unmarked', {
    icon: '😼',
    duration: 2000,
  }),
  moodSelected: (mood: string) => toast.success(`Mood updated: ${mood}`, {
    icon: mood,
    duration: 2000,
  }),
  welcome: (name: string) => toast.success(`Welcome back, ${name}!`, {
    icon: '👋',
    duration: 4000,
  }),
  accountCreated: () => toast.success('Account created successfully! 🎈', {
    icon: '🎉',
    duration: 4000,
  }),
  themeChanged: (isDark: boolean) => toast.success(`${isDark ? 'Dark' : 'Light'} mode activated`, {
    icon: isDark ? '🌙' : '☀️',
    duration: 2000,
  }),
  settingsSaved: () => toast.success('Settings saved successfully!', {
    icon: '💾',
    duration: 2000,
  })
};
