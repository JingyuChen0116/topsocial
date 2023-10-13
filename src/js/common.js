import { log, createDom } from "./utils"

/* NavBar */
export const navbar = document.querySelector("nav")
export const navbar_container = navbar.querySelector(".container")
export const navbar_container_logo = navbar_container.querySelector(".logo")
export const navbar_container_searchbar = navbar_container.querySelector(".search-bar")
export const navbar_container_create = navbar_container.querySelector(".create")
export const navbar_container_create_img = navbar_container.querySelector("img")

/* Main */
export const main = document.querySelector("main")
export const main_container = main.querySelector(".container")


/* Main Left */
export const left = main_container.querySelector(".main-left")
export const left_profile = left.querySelector(".profile")
export const left_profile_img = left_profile.querySelector("img")
export const left_profile_name = left_profile.querySelector("h2")
export const left_profile_at = left_profile.querySelector("p")

export const left_sidebar = left.querySelector(".sidebar")

/* Create Sidebar */
export const create_sidebar = (info = []) => {
  info.forEach( (item) => {
    const sidebar_item = document.createElement("a")
    const sidebar_item_span = document.createElement("span")
    const sidebar_item_span_i = document.createElement("i")
    const sidebar_item_h2 = document.createElement("h2")
    sidebar_item.classList.add("menu-item")

    item.icon_class_list.forEach( (icon_class) => {
      sidebar_item_span_i.classList.add(icon_class)
    })
    sidebar_item_h2.textContent = item.name

    sidebar_item_span.append(sidebar_item_span_i)
    sidebar_item.append(sidebar_item_span)
    sidebar_item.append(sidebar_item_h2)
    left_sidebar.append(sidebar_item)
  })
}

/* Main Middle */
export const middle = main_container.querySelector(".main-middle")

export const middle_highline = middle.querySelector(".highline")

export const middle_form = middle.querySelector("form")
export const middle_form_img = middle_form.querySelector("img")
export const middle_form_input_text = middle.querySelector("#create-post")

/* Create Description */
export const create_description = (info = []) => {
  info.forEach( (item) => {
    const description = document.createElement("div")
    description.classList.add("description")
    description.innerHTML = `
      <div class="profile-photo">
        <img alt="profile photo">
      </div>
      <p></p>
    `
    description.style.backgroundImage = `url(${item.background})`
    description.querySelector("img").src = item.img_src
    description.querySelector("p").textContent = item.title

    middle_highline.append(description)
  })
}

/* Create News */
export const create_news = (info = []) => {
  const doms = {
    info: createDom(),
    info_profile: createDom(),
    info_picture: createDom(),
    info_control: createDom(),
    info_comment: createDom()
  }

  doms.info.classList.add("info")
  doms.info_profile.classList.add("info-profile")
  doms.info_picture.classList.add("info-picture")
  doms.info_control.classList.add("info-control")
  doms.info_comment.classList.add("info-comment")

  doms.info.appendChild(doms.info_profile)
  doms.info.appendChild(doms.info_picture)
  doms.info.appendChild(doms.info_control)
  doms.info.appendChild(doms.info_comment)

  return doms
}

/* Create Profile */
export const create_profile_structure = (profile_dom, info) => {
  const p = `${info.position}, ${info.time}`
  const profile_sub_dom = createProfileDom(info.src, info.name, p)

  const profile_setting = createDom('i')
  profile_setting.className = 'uil uil-ellipsis-h'
  
  profile_dom.appendChild(profile_sub_dom)
  profile_dom.appendChild(profile_setting)
}

/* Create Picture */
export const create_picture_structure = (picture_dom, info) => {
  const picture_sub_dom = createDom('img')
  picture_sub_dom.setAttribute('width', '100%')
  picture_sub_dom.src = info.img_src
  picture_dom.appendChild(picture_sub_dom)
}

/* Create Control */
export const create_control_structure = (control_dom, info) => {
  const main_control = createDom()
  main_control.classList.add("main-control")
  const main_control_like = createDom('i')
  const main_control_comment  = createDom('i')
  const main_control_share = createDom('i')

  main_control.appendChild(main_control_like)
  main_control.appendChild(main_control_comment)
  main_control.appendChild(main_control_share)

  const control_mark = createDom('i')

  control_dom.appendChild(main_control)
  control_dom.appendChild(control_mark)

  main_control_like.className = info.like
  main_control_comment.className = info.comment
  main_control_share.className = info.share
  control_mark.className = info.mark

}

/* Create Comment */
export const create_comment_structure = (comment_dom, info) => {
  const like_panel_dom = createDom()
  like_panel_dom.classList.add("profile-photo-list")
  
  // Profile Photo
  info.img_src_list.forEach( (element) => {
    const like_people_img_dom = createDom('img')
    like_people_img_dom.src = element
    like_people_img_dom.classList.add("profile-photo")
    like_panel_dom.appendChild(like_people_img_dom)
  })

  // Like People Text
  const like_people_text_dom = createDom('span')
  like_people_text_dom.classList.add('like-info')
  like_people_text_dom.innerHTML = `
  Liked by <strong> ${info.first_people_name} </strong> and <strong> ${info.like_peoples_number} </strong> others
  `
  like_panel_dom.appendChild(like_people_text_dom)

  // Comment Text
  const comment_text_dom = createDom('span')
  comment_text_dom.classList.add('comment-info')
  comment_text_dom.textContent = info.comment_info

  // Comment View number
  const comment_view_number_dom = createDom('span')
  comment_view_number_dom.classList.add('view-btn');
  comment_view_number_dom.textContent = `View all ${info.view_number} comments`
  
  comment_dom.appendChild(like_panel_dom)
  comment_dom.appendChild(comment_text_dom)
  comment_dom.appendChild(comment_view_number_dom)
}

/* Main Right */

export const create_friends_list = (friend_list_dom, info=[]) => {
  info.forEach( (friend) => {
    const friend_profile_dom = createProfileDom(friend.src, friend.name, friend.msg)
    friend_list_dom.appendChild(friend_profile_dom)
  })
}

export const add_function_panel_click_event = () => {
  const function_panel = document.querySelector('.function-panel')
  const function_panel_btn_list = function_panel.querySelectorAll("span")

  function_panel_btn_list.forEach( (function_btn) => {
    function_btn.addEventListener("click", () => {
      function_panel_btn_list.forEach( (btn) => {
        btn.classList.remove("active")
      })
      function_btn.classList.add("active")
    })
  })
}

export const create_request_list = (request_list_dom, info=[]) => {
    info.forEach( (element) => {
      const request_dom = createDom()
      request_dom.classList.add("request")
      const p = `${element.mutualFriendNum} Mutual Friends`
      const request_profile_dom = createProfileDom(element.src, element.name, p)
      request_dom.appendChild(request_profile_dom)

      const request_btn_group = createDom()
      request_btn_group.classList.add("request-btn-group")
      const request_btn_accept_dom = createDom('span')
      const request_btn_reject_dom = createDom('span')

      request_btn_accept_dom.className = 'btn btn-primary'
      request_btn_reject_dom.className = 'btn btn-cancel'

      request_btn_accept_dom.textContent = "Accept"
      request_btn_reject_dom.textContent = "Decline"

      request_btn_group.appendChild(request_btn_accept_dom)
      request_btn_group.appendChild(request_btn_reject_dom)
      request_dom.appendChild(request_btn_group)

      request_list_dom.appendChild(request_dom)
    })
  }

function createProfileDom(img_src='', h2='', p='') {
  const profile_dom = createDom()
  profile_dom.classList.add("profile")
  profile_dom.innerHTML = `
    <div class="profile-photo">
      <img alt="profile photo">
    </div>
    <div class="profile-description">
      <h2></h2>
      <p></p>
    </div>
  `

  profile_dom.querySelector("img").src = img_src
  profile_dom.querySelector("h2").textContent = h2
  profile_dom.querySelector("p").textContent = p

  return profile_dom
}
