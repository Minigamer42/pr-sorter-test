declare namespace google.accounts.oauth2 {
    interface TokenClientConfig {
        client_id: string;
        scope: string;
        callback: (tokenResponse: { access_token: string }) => void;
    }

    function initTokenClient(config: TokenClientConfig): {
        requestAccessToken: () => void;
    };
}
