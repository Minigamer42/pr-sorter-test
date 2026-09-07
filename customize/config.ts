import type { AppConfig } from '../src/app/types';

export const config = {
    localStoragePrefix: 'hachi',
    title: 'HACHI',
    description: 'Party rank sorter for HACHI.',
    tags: ['Artist'],
    deadline: new Date('2026-09-20T18:00:00+02:00'),
    googleSheets: {
        clientId: '575550662002-hivobiln683gua375ss3b7k58afnn36t.apps.googleusercontent.com',
        appId: '575550662002',
        idColumnHeader: 'id',
        rankColumnHeader: 'Rank',
        scoreColumnHeader: 'Score (Optional)'
    }
} satisfies AppConfig;
