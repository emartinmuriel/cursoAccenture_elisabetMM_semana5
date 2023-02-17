const MENSAJES: string[] = [
    "Un elefante se balanceaba sobre la tela de una araña",
    "Dos elefantes se balanceaba sobre la tela de una araña",
    "Tres elefantes se balanceaba sobre la tela de una araña",
    "..."
];

export function obtenerError (num:number):string{
return MENSAJES[num];
}