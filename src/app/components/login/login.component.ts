import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public formulario: FormGroup = new FormGroup({}, null, null);

  constructor(private loginService: LoginService, private fb: FormBuilder, 
    private messageService: MessageService,
		public router: Router) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
			usuario: [null, Validators.required],
			senha: [null, Validators.required],
    });
  }

  public login() {
    this.messageService.clear();
    if(this.formulario.valid){
      this.loginService.login(this.formulario.value)
        .subscribe(() => {
          
		      this.router.navigate(['home']);
        }, error => {
          this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao tentar login'});
        });
    } else {
      this.messageService.add({severity:'warn', summary:'Atenção', detail:'Preencha os campos obrigatórios'});
    } 
  }
}
