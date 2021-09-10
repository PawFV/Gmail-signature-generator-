new Vue({
  el: '#app',
  data: {
    name: '',
    jobTitle: '',
    github: '',
    profileImgUrl: '',
    linkedin: ''
  },
  computed: {
    outputHTML() {
      return `<div
        style="width: 170px; height: 1px; background-color: #8b8b8b; margin: 15px; position: relative"
      ></div>
      <div style="width: 200px; font-family: Arial, Helvetica, sans-serif; text-align: center">
        <img
          src="${this.profileImgUrl}"
          height="69"
          alt="profile image"
          style="border-radius: 48px; max-width: 69px"
        />
  
        <h3 style="color: #f13764; margin-top: 5px; margin-bottom: 0px">${this.name}</h3>
        <h4 style="color: #424242; margin-top: 5px; margin-bottom: 0px">${this.jobTitle}</h4>
        <div style="margin-top: 5px">
          <a
            href="${this.linkedin}"
            target="_blank"
            style="border: 0; display: inline-block"
            ><img
              width="28"
              height="28"
              src="https://uploads.hatima.co.il/images/linkedin.png"
              style="
                border-radius: 4px;
                display: block;
                border: none;
                width: 28px;
                max-width: 28px !important;
                height: 28px;
                max-height: 28px !important;
                margin-right: 5px;
              " /></a
          ><a
            href="${this.github}"
            target="_blank"
            style="border: 0; display: inline-block"
            ><img
              width="28"
              height="28"
              src="https://uploads.hatima.co.il/images/github.png"
              style="
                border-radius: 4px;
                display: block;
                border: none;
                width: 28px;
                max-width: 28px !important;
                height: 28px;
                max-height: 28px !important;
              "
          /></a>
        </div>
      </div>`
    }
  }
})

function copyToClipboard() {
  const copyText = document.getElementById('generatedHtml')

  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value)
}

let baseHTML = `<div
style="width: 170px; height: 1px; background-color: #8b8b8b; margin: 15px; position: relative"
></div>
<div style="width: 200px; font-family: Arial, Helvetica, sans-serif; text-align: center">
<img
  src="https://uploads.hatima.co.il/uploads/1631274797.png"
  height="69"
  alt="profile image"
  style="border-radius: 48px; max-width: 69px"
/>

<h3 style="color: #f13764; margin-top: 5px; margin-bottom: 0px">Pau Pregoni</h3>
<h4 style="color: #424242; margin-top: 5px; margin-bottom: 0px">Fullstack Developer</h4>
<div style="margin-top: 5px">
  <a
    href="https://www.linkedin.com/in/pau-pregoni-juan-b479b617a/"
    target="_blank"
    style="border: 0; display: inline-block"
    ><img
      width="28"
      height="28"
      src="https://uploads.hatima.co.il/images/linkedin.png"
      style="
        border-radius: 4px;
        display: block;
        border: none;
        width: 28px;
        max-width: 28px !important;
        height: 28px;
        max-height: 28px !important;
        margin-right: 5px;
      " /></a
  ><a
    href="https://github.com/PawFV/"
    target="_blank"
    style="border: 0; display: inline-block"
    ><img
      width="28"
      height="28"
      src="https://uploads.hatima.co.il/images/github.png"
      style="
        border-radius: 4px;
        display: block;
        border: none;
        width: 28px;
        max-width: 28px !important;
        height: 28px;
        max-height: 28px !important;
      "
  /></a>
</div>
</div>`
