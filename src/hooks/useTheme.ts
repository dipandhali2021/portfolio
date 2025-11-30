import { useState, useEffect } from 'react';

export type PaletteType = 'latte' | 'frappe' | 'macchiato' | 'mocha';
export type AccentColor = 'rosewater' | 'flamingo' | 'pink' | 'mauve' | 'red' | 'maroon' | 'peach' | 'yellow' | 'green' | 'teal' | 'sky' | 'sapphire' | 'blue' | 'lavender';

export const paletteNames: PaletteType[] = ['latte', 'frappe', 'macchiato', 'mocha'];
export const accentColors: AccentColor[] = ['rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach', 'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'];

function getStoredValue<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue;

    try {
        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error);
        return defaultValue;
    }
}

function setStoredValue<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;

    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
    }
}

export function usePalette() {
    const [palette, setPaletteState] = useState<PaletteType>(() =>
        getStoredValue<PaletteType>('palette', 'mocha')
    );

    useEffect(() => {
        // Remove all theme classes
        document.documentElement.classList.remove('latte', 'frappe', 'macchiato', 'mocha');
        // Add the selected theme class
        document.documentElement.classList.add(palette);
        setStoredValue('palette', palette);
    }, [palette]);

    return [palette, setPaletteState] as const;
}

export function useAccentColor() {
    const [accentColor, setAccentColorState] = useState<AccentColor>(() =>
        getStoredValue<AccentColor>('accent-color', 'peach')
    );

    useEffect(() => {
        const colorValue = `var(--color-${accentColor})`;
        document.documentElement.style.setProperty('--current-accent-color', colorValue);
        setStoredValue('accent-color', accentColor);
    }, [accentColor]);

    return [accentColor, setAccentColorState] as const;
}

export function useBackgroundEffect() {
    const [enabled, setEnabledState] = useState<boolean>(() =>
        getStoredValue<boolean>('background-effect', true)
    );

    useEffect(() => {
        setStoredValue('background-effect', enabled);
    }, [enabled]);

    return [enabled, setEnabledState] as const;
}

export function useTotalTimeOnSite() {
    const [totalTime, setTotalTime] = useState<number>(() =>
        getStoredValue<number>('total-time-on-site', 0)
    );

    useEffect(() => {
        setStoredValue('total-time-on-site', totalTime);
    }, [totalTime]);

    return [totalTime, setTotalTime] as const;
}
