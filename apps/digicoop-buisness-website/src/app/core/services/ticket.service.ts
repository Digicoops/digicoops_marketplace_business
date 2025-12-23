import { Injectable, signal } from '@angular/core';

export interface Ticket {
  id: string;
  subject: string;
  priority: 'Haute' | 'Moyenne' | 'Basse';
  client: string;
  contactName: string;
  date: string;
  status: 'En cours' | 'Nouveau' | 'Résolu' | 'En attente client';
  clientInitials: string;
  clientColor: string;
  messages?: Message[];
}

export interface Message {
  author: string;
  isMe: boolean;
  date: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets = signal<Ticket[]>([
    {
      id: '4923',
      subject: 'Panne capteur humidité (Zone B)',
      priority: 'Haute',
      client: 'EARL du Soleil',
      contactName: 'Jean Dupont',
      date: '12 Oct 2023',
      status: 'En cours',
      clientInitials: 'ES',
      clientColor: 'bg-[#e3eadd] text-primary',
      messages: []
    },
    {
      id: '4922',
      subject: 'Problème synchro App Mobile',
      priority: 'Moyenne',
      client: 'Coop Val de Loire',
      contactName: 'Sophie Martin',
      date: '11 Oct 2023',
      status: 'Nouveau',
      clientInitials: 'CV',
      clientColor: 'bg-[#d0e1f5] text-blue-700',
      messages: []
    },
    {
      id: '4920',
      subject: 'Question Facturation T3',
      priority: 'Basse',
      client: 'Ferme des 3 Chênes',
      contactName: 'Marc Dubois',
      date: '09 Oct 2023',
      status: 'Résolu',
      clientInitials: 'F3',
      clientColor: 'bg-[#f5d0d0] text-red-700',
      messages: []
    },
    {
      id: '4918',
      subject: 'Demande formation "Modules Avancés"',
      priority: 'Basse',
      client: 'GAEC des Monts',
      contactName: 'Pierre Durand',
      date: '08 Oct 2023',
      status: 'En attente client',
      clientInitials: 'GM',
      clientColor: 'bg-[#f5f2d0] text-yellow-700',
      messages: []
    },
    {
      id: '4915',
      subject: 'Erreur 503 sur le dashboard',
      priority: 'Haute',
      client: 'AgriNord',
      contactName: 'Julie Rousseau',
      date: '07 Oct 2023',
      status: 'Résolu',
      clientInitials: 'AN',
      clientColor: 'bg-[#daddf5] text-indigo-700',
      messages: []
    }
  ]);

  getTicket(id: string) {
    return this.tickets().find(t => t.id === id) || this.tickets()[0];
  }

  addTicket(ticket: Ticket) {
    this.tickets.update(current => [ticket, ...current]);
  }
}