const astroConfig = {"base":"/","root":"file:///C:/Users/Cezar/OneDrive/Documentos/Delphi%20Threads%20Book/Hotsite/new-site/","srcDir":"file:///C:/Users/Cezar/OneDrive/Documentos/Delphi%20Threads%20Book/Hotsite/new-site/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {"themes":["dracula"]};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///C:/Users/Cezar/OneDrive/Documentos/Delphi%20Threads%20Book/Hotsite/new-site/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
