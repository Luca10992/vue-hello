const { createApp } = Vue;

createApp ({
    data() {
        return {
            header: {
                title: 'Boolean Web App',
                info: 'Click the logo',
                class: 'text-center display-4 text-primary my-5 fw-bold'
            }
        }
    }
}).mount('#header-app')

createApp ({
    data() {
        return {
            main: {
                image: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/681/original/Pittogramma-RGB-1080-BLUE-circle.png',
                class: 'w-50',
                site: 'https://boolean.careers/?utm_source=google&utm_campaign=it_search_brand&utm_medium=cpc&utm_content=boolean&utm_term=boolean&gad_source=1&gclid=CjwKCAiAtt2tBhBDEiwALZuhAKi_M1QOXNUPDYsEEN-cs3tULXrx_tcyXQ5kYAPHiVRlRsy1hxmrBRoCk3QQAvD_BwE'
            }
        }
    }
}).mount('#main-app')