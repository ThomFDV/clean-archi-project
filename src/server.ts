import {App} from './app';



const main = async(): Promise<void> => {
    const application = await App.createApp();

    const PORT = 3000;

    application.app.listen(PORT, () => {
        console.log('Express server listening on port ' + PORT);
    });
};

main().then();
