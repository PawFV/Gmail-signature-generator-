new Vue({
  el: '#app',
  data: {
    name: 'Pau Pregoni',
    jobTitle: 'CTO, SinapsisVet',
    profileImgUrl:
      'https://media.licdn.com/dms/image/D4D03AQGf8bf0XTxc2w/profile-displayphoto-shrink_400_400/0/1683229429816?e=1717632000&v=beta&t=zYZYwTKKUakalnRdv1pFd8ngLK2pWJ42oBrVd8x88W8',
    linkedin: 'https://www.linkedin.com/company/sinapsisvet/about/',
    github: '',
    website: 'https://sinapsisvet.com/',
    slack: '',
    config: {
      colors: {
        nameColor: '#338de1',
        jobTitleColor: '#424242',
        linkColor: '#039be5'
      },
      enableLinks: {
        linkedin: true,
        github: false,
        website: true,
        slack: false,
        profileImage: true
      }
    }
  },
  methods: {
    copyToClipboard() {
      const copyText = document.getElementById('generatedHtml')

      copyText.select()
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(copyText.value)
    }
  },
  computed: {
    outputHTML() {
      const { name, jobTitle, profileImgUrl, linkedin, github, website, slack, config } = this
      const { nameColor, jobTitleColor, linkColor } = config.colors
      const { enableLinks } = config

      return `
        <div style="width: 200px; font-family: Arial, Helvetica, sans-serif; text-align: center">
          ${
            enableLinks.profileImage
              ? `<img
                src='${profileImgUrl}'
                height='69'
                alt='profile image'
                style='border-radius: 48px; max-width: 69px; margin: auto;'
              />`
              : ''
          }
          <h3 style="color: ${nameColor}; margin-top: 5px; margin-bottom: 0px">${name}</h3>
          <h4 style="color: ${jobTitleColor}; margin-top: 5px; margin-bottom: 0px">${jobTitle}</h4>
          <div style="margin-top: 5px">
            ${
              enableLinks.linkedin
                ? `<a href="${linkedin}" target="_blank" style="border: 0; display: inline-block"><img width="28" height="28" src="https://uploads.hatima.co.il/images/linkedin.png" style="border-radius: 4px; display: block; border: none; width: 28px; max-width: 28px !important; height: 28px; max-height: 28px !important; margin-right: 5px;"></a>`
                : ''
            }
            ${
              enableLinks.github
                ? `<a href="${github}" target="_blank" style="border: 0; display: inline-block"><img width="28" height="28" src="https://uploads.hatima.co.il/images/github.png" style="border-radius: 4px; display: block; border: none; width: 28px; max-width: 28px !important; height: 28px; max-height: 28px !important;"></a>`
                : ''
            }
            ${
              enableLinks.website
                ? `<a href="${website}" target="_blank" style="border: 0; display: inline-block"><img width="28" height="28" src="https://sinapsisvet.atlassian.net/secure/viewavatar?size=xxxlarge@2x&avatarId=10554&avatarType=project" style="border-radius: 4px; display: block; border: none; width: 28px; max-width: 28px !important; height: 28px; max-height: 28px !important; margin-left: 5px;"></a>`
                : ''
            }
            ${
              enableLinks.slack
                ? `<a href="${slack}" target="_blank" style="border: 0; display: inline-block"><img width="28" height="28" src="https://static-00.iconduck.com/assets.00/slack-icon-2048x2048-5nfqoyso.png" style="border-radius: 4px; display: block; border: none; width: 28px; max-width: 28px !important; height: 28px; max-height: 28px !important; margin-left: 5px;"></a>`
                : ''
            }
          </div>
        </div>
      `
    }
  }
})
