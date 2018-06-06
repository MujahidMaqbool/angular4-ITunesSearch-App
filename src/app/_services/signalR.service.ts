import { Injectable } from '@angular/core';
declare const $: any;

@Injectable()

export class SignalRService {  
    url: string;
    private connection: any;
    private proxy: any;
    private ulr: any;

    constructor() { }

    public startConnection(): void {
        debugger;
        this.url = "https://crowdeyews-test.azurewebsites.net/signalR/hubs";
        this.connection = $.hubConnection(this.url);
        this.proxy = this.connection.createHubProxy('CEWANotificationsHub');
debugger
        this.connection.start().done((data: any) => {
            console.log('Connected to Processing Hub');
            this.sendMessage();
        }).catch((error: any) => {
            console.log('Hub error -> ' + error);
        });
    }

    public sendMessage(): void {
        this.proxy.invoke('SendMessage', 'test')
            .catch((error: any) => {
                console.log('SendMessage error -> ' + error);
            });
    }
}