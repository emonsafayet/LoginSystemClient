import { Component, OnInit, ErrorHandler, Inject, Injector, Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-registration',
	templateUrl: 'registration.html'
})
export class Registration implements OnInit {
	constructor(public service: UserService, private toastr: ToastrService) { }

	ngOnInit() {
		this.service.formModel.reset();
	}
	onSubmit() {
		this.service.register().subscribe(
			(res: any) => {
				if (res.succeeded) {
					this.service.formModel.reset();
					this.toastr.success('New user created!', 'Registration successful.');
				} else {
					res.errors.forEach(element => {
						switch (element.code) {
							case 'DuplicateUserName':
								this.toastr.error('Username is already taken', 'Registration failed.');
								break;

							default:
								this.toastr.error(element.description, 'Registration failed.');
								break;
						}
					});
				}
			},
			err => {
				console.log(err);
			}
		);
	}

}