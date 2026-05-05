import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private emailUrl = 'https://develop.drsavealife.com/v1/mail-service';

  data = {
    senderName: '',
    receipient: '',
    subject: '',
    body: '',
  };

  constructor(private http: HttpClient) {}

  postData() {
    const headers = {
      'Content-Type': 'application/json',
    };

    this.http.post(`${this.emailUrl}/send`, this.data, { headers }).subscribe({
      next: (resp) => {
        console.log(resp);
        alert('Message sent successfully ✔️');
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to send message ❌');
      },
    });
  }

  resetForm() {
    this.data = {
      senderName: '',
      receipient: '',
      subject: '',
      body: '',
    };
  }
}
