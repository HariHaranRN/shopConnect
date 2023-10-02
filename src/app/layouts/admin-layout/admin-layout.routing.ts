import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { OffersComponent } from "src/app/pages/offers/offers.component";
import { CampaignComponent } from "src/app/pages/campaign/campaign.component";
import { UserComponent } from "src/app/pages/user/user.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "offers", component: OffersComponent},
  { path: "campaign", component: CampaignComponent},
  { path: "shop", component: UserComponent}
];
