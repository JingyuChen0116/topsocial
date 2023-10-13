import "./index.css"
import { profile, sidebar, highline, cards, message, request } from "./data/db.json"
console.log("here")
// import { cards, message, request, profile, highline, sidebar } from "@/js/database"

import {
  // NavBar
  navbar_container_logo,
  navbar_container_create_img,
  // Main Left
  left_profile_img,
  left_profile_name,
  left_profile_at,
  create_sidebar,
  // Main Medium
  create_description,
  middle_form_img,
  middle_form_input_text,
  create_news,
  create_profile_structure,
  create_picture_structure,
  create_control_structure,
  create_comment_structure,
  // Main Right
  create_friends_list,
  add_function_panel_click_event,
  create_request_list

} from '@/js/common'

/* NAV */
console.log("here nav")
navbar_container_logo.textContent = "TopSocial"
navbar_container_create_img.src = profile.img_src

/* LEFT */
left_profile_img.src = navbar_container_create_img.src
left_profile_name.textContent = profile.name
left_profile_at.textContent = profile.at

create_sidebar(sidebar)

/* MIDDLE */

/* FORM */
middle_form_img.src = profile.img_src
middle_form_input_text.placeholder = `What's on your mind, ${profile.name}?`

/* HIGHLINE */
create_description(highline.description)

/* CARD */
const card_dom = document.querySelector(".card")
cards.forEach( (item) => {
  const doms = create_news()
  card_dom.appendChild(doms.info)
  create_profile_structure(doms.info_profile, item.profile)
  create_picture_structure(doms.info_picture, item.picture)
  create_control_structure(doms.info_control, item.control)
  create_comment_structure(doms.info_comment, item.comment)
})

/* Message */
const message_dom = document.querySelector(".friend-list")
create_friends_list(message_dom, message)
add_function_panel_click_event();

/* Request */
const request_dom = document.querySelector(".request-list")
create_request_list(request_dom, request)
