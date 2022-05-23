export abstract class Usuario {
	constructor(
		protected nome?: string|undefined,
		protected email?: string|undefined,
		protected dataNasc?: Date|undefined,
		protected turmaId?: string|undefined) {
		
	}
}