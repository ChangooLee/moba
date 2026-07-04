import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../ui/primitives';

const LANGUAGES = [
    { code: 'ko', name: '한국어', short: 'KO' },
    { code: 'en', name: 'English', short: 'EN' },
    { code: 'zh', name: '中文', short: 'ZH' },
    { code: 'ja', name: '日本語', short: 'JA' },
];

const LanguageSelector = () => {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

    useEffect(() => {
        if (!open) return;
        const onDoc = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('mousedown', onDoc);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDoc);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const select = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={t('common.ariaLabels.languageSelect')}
                className="inline-flex items-center gap-2 rounded-full border border-mist-deep bg-white/70 px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:border-aqua/50 hover:text-aqua-dark focus:outline-none focus:ring-2 focus:ring-aqua/40"
            >
                <Icon name="globe" className="w-4 h-4 text-aqua-dark" strokeWidth={1.8} />
                <span className="font-heading font-semibold">{current.short}</span>
                <Icon name="chevronDown" className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} strokeWidth={2} />
            </button>

            {open && (
                <ul
                    role="listbox"
                    className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-mist-deep bg-white py-1 shadow-card-lg z-50 animate-fade-in"
                >
                    {LANGUAGES.map((lang) => {
                        const active = lang.code === current.code;
                        return (
                            <li key={lang.code} role="option" aria-selected={active}>
                                <button
                                    type="button"
                                    onClick={() => select(lang.code)}
                                    className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm transition-colors ${active ? 'text-aqua-dark font-semibold bg-mist/60' : 'text-gray-700 hover:bg-mist/60'}`}
                                >
                                    <span>{lang.name}</span>
                                    {active && <Icon name="check" className="w-4 h-4 text-aqua-dark" strokeWidth={2} />}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelector;
