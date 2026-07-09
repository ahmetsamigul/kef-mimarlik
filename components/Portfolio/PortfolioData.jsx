import PortfolioImg from '@/public/images/600x374.png';
import PortfolioImg2 from '@/public/images/1260x500.png';
import PortfolioImg3 from '@/public/images/768x480.png';
import PortfolioImg4 from '@/public/images/660x412.png';
import PortfolioImg5 from '@/public/images/1046x415.png';
import Image from '@/public/images/515x321.png';

export const portfolioData = {
    creativeAgency: {
        navigationList: [
            {
                title: "First",
                classes: "first",
                dataFilter: ".first"
            },
            {
                title: "Second",
                classes: "second",
                dataFilter: ".second"
            },
            {
                title: "Third",
                classes: "third",
                dataFilter: ".third"
            },
        ],
        projects: [
            {
                title: 'Project Title Here',
                slug: 'creative-agency-portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'creative-agency-portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'creative-agency-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'creative-agency-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
        ],
    },
    interior: {
        navigationList: [
            {
                title: "First",
                classes: "first",
                dataFilter: ".first"
            },
            {
                title: "Second",
                classes: "second",
                dataFilter: ".second"
            },
            {
                title: "Third",
                classes: "third",
                dataFilter: ".third"
            },
        ],
        projects: [
            {
                title: 'Project Title Here',
                slug: 'interior-portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'interior-portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'interior-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'interior-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
        ],
    },
    mediaAgency: {
        projects: [
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
        ],
    },
    portfolioFullWidth: {
        projects: [
            {
                title: 'Project Title',
                slug: 'portfolio-fullwidth-portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg2,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title',
                slug: 'portfolio-fullwidth-portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg2,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title',
                slug: 'portfolio-fullwidth-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg2,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title',
                slug: 'portfolio-fullwidth-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg2,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    portfolioGrid: {
        navigationList: [
            {
                title: "First",
                classes: "first",
                dataFilter: ".first"
            },
            {
                title: "Second",
                classes: "second",
                dataFilter: ".second"
            },
            {
                title: "Third",
                classes: "third",
                dataFilter: ".third"
            },
        ],
        projects: [
            {
                title: 'Project Title 1',
                slug: 'portfolio-grid-portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title 2',
                slug: 'portfolio-grid-portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title 3',
                slug: 'portfolio-grid-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title 4',
                slug: 'portfolio-grid-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title 5',
                slug: 'portfolio-grid-portfolio-5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title 6',
                slug: 'portfolio-grid-portfolio-6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
        ],
    },
    portfolioHorizontal: {
        projects: [
            {
                title: 'Project Title 1',
                slug: 'portfolio-horizontal-portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg4,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title 2',
                slug: 'portfolio-horizontal-portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg4,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title 3',
                slug: 'portfolio-horizontal-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg4,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title 4',
                slug: 'portfolio-horizontal-portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg4,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title 5',
                slug: 'portfolio-horizontal-portfolio-5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg4,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    portfolioVertical: {
        projects: [
            {
                title: 'List Item 1',
                slug: 'portfolio-bertical-portfolio-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 2',
                slug: 'portfolio-bertical-portfolio-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 3',
                slug: 'portfolio-bertical-List Item 3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 4',
                slug: 'portfolio-bertical-portfolio-4',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 5',
                slug: 'portfolio-bertical-portfolio-5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 6',
                slug: 'portfolio-bertical-portfolio-6',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 7',
                slug: 'portfolio-bertical-portfolio-7',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 8',
                slug: 'portfolio-bertical-portfolio-8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'List Item 9',
                slug: 'portfolio-bertical-portfolio-9',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div class="row mt-4"> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div class="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg3,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    mediaAgencyPortfolio: {
        title: "Our Recent Works",
        navigationList: [
            {
                title: "First",
                classes: "first",
                dataFilter: ".first"
            },
            {
                title: "Second",
                classes: "second",
                dataFilter: ".second"
            },
            {
                title: "Third",
                classes: "third",
                dataFilter: ".third"
            },
        ],
        projects: [
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-11',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-12',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-13',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-14',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-15',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
            {
                title: 'Project Title Here',
                slug: 'media-agency-portfolio-16',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                content2: '<h2 class="fw-medium mt-4 mt-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
                videoImage: PortfolioImg5,
                videoUrl: '/images/bg-video.mp4',
            },
        ],
    },
}