//#region Inyeccion de dependencias
class Printer {
    print(message) {
        console.log(message);
    }
}

class Report {
    constructor(printer){
        this.printer = printer; // Inyección de dependencia
    }

    show(){
        this.printer.print("Este es un reporte");
    }
}

// Inyectamos la dependencia Printer en Report
const printer = new Printer();
const report = new Report(printer);
report.show(); // Imprime: Este es un reporte
// Esto permite cambiar la implementación de Printer sin modificar Report
//#endregion

//#region Sin inyección de dependencias
class ReportWithoutInjection {
    constructor() {
        this.printer = new Printer(); // Dependencia creada internamente
    }

    show() {
        this.printer.print("Este es un reporte sin inyección de dependencias");
    }
}
// No podemos cambiar la implementación de Printer sin modificar ReportWithoutInjection
const reportWithoutInjection = new ReportWithoutInjection();
reportWithoutInjection.show(); // Imprime: Este es un reporte sin inyección de dependencias
//#endregion

//#region Comparación de inyección de dependencias y no inyección

//Programa que envia notificaciones de compras

class EmailService {
    send(message) {
        console.log(`Enviando email: ${message}`);
    }
}

class SMSService {
    send(message) {
        console.log(`Enviando SMS: ${message}`);
    }
}


//#region Sin inyección de dependencias

class PurchaseNotifierWithoutDI {
    constructor() {
        this.emailService = new EmailService(); // Dependencia creada internamente
        this.smsService = new SMSService(); // Dependencia creada internamente
    }

    notify(chanel, message) {
        switch (chanel) {
            case 'email':
                this.emailService.send(message);
                break;
            case 'sms':
                this.smsService.send(message);
                break;
            default:
                console.log("Canal no soportado");
        }
    }
}

// No podemos cambiar la implementación de EmailService o SMSService sin modificar PurchaseNotifierWithoutDI
const notifierWithoutDI = new PurchaseNotifierWithoutDI();
notifierWithoutDI.notify('email', 'Tu compra ha sido realizada con éxito'); // Enviando email: Tu compra ha sido realizada con éxito
notifierWithoutDI.notify('sms', 'Tu compra ha sido realizada con éxito'); // Enviando SMS: Tu compra ha sido realizada con éxito

//#endregion Sin inyección de dependencias


//#region Inyección de dependencias

class PurchaseNotifierWithDI {
    constructor(notificationService) {
        this.notificationService = notificationService; // Inyección de dependencia
    }
    notify(message) {
        this.notificationService.send(message);
    }
}

// Inyectamos la dependencia EmailService o SMSService al crear PurchaseNotifierWithDI
const emailNotifier = new PurchaseNotifierWithDI(new EmailService());
const smsNotifier = new PurchaseNotifierWithDI(new SMSService());
emailNotifier.notify('Tu compra ha sido realizada con éxito'); // Enviando email: Tu compra ha sido realizada con éxito
smsNotifier.notify('Tu compra ha sido realizada con éxito'); // Enviando SMS: Tu compra ha sido realizada con éxito

//#endregion inyección de dependencias

//#endregion Comparación de inyección de dependencias y no inyección