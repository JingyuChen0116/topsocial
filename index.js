import "./index.css"
import { profile } from "./data/db.json"
// import { cards, message, request, profile, highline } from "@/js/database"
import {
  // NavBar
  navbar_container_logo,
  navbar_container_create_img,
  // Main Left
  left_profile_img,
  left_profile_name,
  left_profile_at
} from '@/js/common'

/* NAV */
navbar_container_logo.textContent = "TopSocial"
navbar_container_create_img.src = profile.img_src

/* LEFT */
left_profile_img.src = navbar_container_create_img.src
left_profile_name.textContent = profile.name
left_profile_at.textContent = profile.at

/* MIDDLE */

/* FORM */

/* HIGHLINE */

/* CARD */

/* Message */

/* Request */
