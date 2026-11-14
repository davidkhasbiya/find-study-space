(() => {
    const storageKey = 'findStudySpaceSettings';
    const defaults = {
        theme: 'light',
        language: 'id',
        emailNotification: true,
        spaceNotification: true,
        campusNotification: false
    };

    function normalizeSettings(value) {
        const settings = { ...defaults, ...value };
        settings.theme = settings.theme === 'dark' ? 'dark' : 'light';
        return settings;
    }

    function readSettings() {
        try {
            const stored = window.localStorage.getItem(storageKey);
            if (!stored) return { ...defaults };

            const parsed = JSON.parse(stored);
            if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
                return { ...defaults };
            }

            return normalizeSettings(parsed);
        } catch (error) {
            console.warn('Preferensi tema tidak dapat dibaca.', error);
            return { ...defaults };
        }
    }

    let settings = readSettings();

    function applyTheme() {
        document.documentElement.dataset.theme = settings.theme;
    }

    function saveSettings() {
        try {
            window.localStorage.setItem(storageKey, JSON.stringify(settings));
        } catch (error) {
            console.warn('Preferensi tema tidak dapat disimpan.', error);
        }
    }

    function getSettings() {
        return { ...settings };
    }

    function updateSettings(updates) {
        if (updates && typeof updates === 'object' && !Array.isArray(updates)) {
            settings = normalizeSettings({ ...settings, ...updates });
        }

        applyTheme();
        saveSettings();
        return getSettings();
    }

    function resetSettings() {
        settings = { ...defaults };
        applyTheme();
        saveSettings();
        return getSettings();
    }

    applyTheme();
    window.FindStudySpaceTheme = Object.freeze({
        getSettings,
        updateSettings,
        resetSettings
    });
})();
