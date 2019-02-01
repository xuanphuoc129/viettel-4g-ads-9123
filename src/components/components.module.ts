import { NgModule } from '@angular/core';
import { ViettelPackageComponent } from './viettel-package/viettel-package';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { ViettelHeaderComponent } from './viettel-header/viettel-header';
import { ViettelFooterComponent } from './viettel-footer/viettel-footer';
import { FakeCustomerComponent } from './fake-customer/fake-customer';
import { QuestionAndAnswerComponent } from './question-and-answer/question-and-answer';
@NgModule({
	declarations: [ViettelPackageComponent,
    FakeCustomerComponent,
    ViettelHeaderComponent,
    ViettelFooterComponent,
    QuestionAndAnswerComponent,
    ],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [ViettelPackageComponent,
    FakeCustomerComponent,
    QuestionAndAnswerComponent,
    ViettelHeaderComponent,
    ViettelFooterComponent,
    ]
})
export class ComponentsModule {}
