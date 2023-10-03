import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"],
})
export class OffersComponent implements OnInit {
  constructor(private modalService: NgbModal, private service: ApiService, private spinner:NgxSpinnerService) {}

  ngOnInit(): void {}
  prompt: string = "";
  cards: any[] = [];
  cardsGenerated: boolean = false;

  generateCards() {
    this.spinner.show()
    this.service.offerGenerate({content: this.prompt}).subscribe((data:any)=> {
      console.log(data)
      this.cards = data.map((item) => ({
        image: item.image,
        title: item.header,
        content: item.message,
      }));
      this.spinner.hide()
    })
    console.log("received prompt ", this.prompt);
    this.cardsGenerated = true;
  }
  open() {
    console.log("invoked modal");
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.content = "smapleContent";
    modalRef.componentInstance.imageLink = "sampleImageLink";
  }
}
@Component({
  selector: "ngbd-modal-content",
  styleUrls: ["./offers.component.scss"],
  template: `
    <div class="modal-body">
      <div class="row">
        <div class="col-lg-10">
          <h5
            class="modal-title"
            id="socialModalLabel"
            style="color: white; margin-bottom: 15px; font-size: 15px"
          >
            Share on Social Media
          </h5>
        </div>
        <div class="col-lg-2">
          <button
            type="button"
            class="close"
            aria-label="Close"
            (click)="activeModal.dismiss('Cross click')"
          >
            <span aria-hidden="true" style="color:white">&times;</span>
          </button>
        </div>
      </div>
      <div class="share-icons">
        <div class="share-icon" (click)="toggleIcon('facebook')">
          <i class="fab fa-facebook"></i>
        </div>

        <div class="share-icon" (click)="toggleIcon('twitter')">
          <i class="fab fa-twitter"></i>
        </div>

        <div class="share-icon" (click)="toggleIcon('instagram')">
          <i class="fab fa-instagram"></i>
        </div>

        <div class="share-icon" (click)="toggleIcon('googleads')">
          <i class="fab fa-google"></i>
        </div>
      </div>
      <div class="d-flex justify-content-end" style="padding:5px">
        <button
          type="button"
          class="btn-simple custom-button"
          (click)="activeModal.close('Close click')"
          height="5px"
        >
          Share
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() imageLink: string;
  @Input() content: string;
  selectedIcons: { [key: string]: boolean } = {};

  constructor(public activeModal: NgbActiveModal) {
    this.selectedIcons = {
      facebook: false,
      twitter: false,
      instagram: false,
    };
  }

  toggleIcon(icon: string) {
    console.log("toggleicon");
    this.selectedIcons[icon] = !this.selectedIcons[icon];
  }
}

// [ngClass]="{ 'selected': selectedIcons['facebook'] }"
