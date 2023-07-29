<template>
    <div class="flex flex-1 flex-col bg-gray-50">
        <div class="mb-10 sm:mb-14 md:mb-24">
            <div class="absolute bg-emerald-700 h-2 left-0 top-0 w-full"></div>
            <div class="container mx-auto">
                <nav class="flex h-16 items-center justify-between sm:h-auto my-10 relative w-full z-10 sm:my-20">
                    <a class="flex items-center leading-none" href="/">
                        <svg class="fill-current text-emerald-700 h-8 mr-4 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M15.38,0 L34.62,0 C39.97,0 41.91,0.56 43.86,1.6 C45.7948257,2.62319527 47.3768047,4.20517426 48.4,6.14 C49.44,8.09 50,10.04 50,15.38 L50,34.62 C50,39.97 49.44,41.91 48.4,43.86 C47.3768047,45.7948257 45.7948257,47.3768047 43.86,48.4 C41.91,49.44 39.96,50 34.62,50 L15.38,50 C10.03,50 8.09,49.44 6.14,48.4 C4.20517426,47.3768047 2.62319527,45.7948257 1.6,43.86 C0.56,41.91 0,39.96 0,34.62 L0,15.38 C0,10.03 0.56,8.09 1.6,6.14 C2.62319527,4.20517426 4.20517426,2.62319527 6.14,1.6 C8.09,0.56 10.04,0 15.38,0 Z M12.58,21 C11.56,21 11.02,21.14 10.53,21.4 C10.05,21.66 9.66,22.05 9.4,22.53 C9.14,23.03 9,23.56 9,24.57 L9,25.43 C9,26.43 9.14,26.98 9.4,27.47 C9.66,27.95 10.05,28.34 10.53,28.6 C11.03,28.86 11.56,29 12.57,29 L29.43,29 C30.43,29 30.98,28.86 31.47,28.6 C31.95,28.34 32.34,27.95 32.6,27.47 C32.86,26.97 33,26.44 33,25.43 L33,24.57 C33,23.57 32.86,23.02 32.6,22.53 C32.344478,22.0490526 31.9509474,21.655522 31.47,21.4 C30.8374445,21.0882953 30.1334284,20.9502529 29.43,21 L12.57,21 L12.58,21 Z M12.58,23 L29.43,23 C30.07,23 30.31,23.05 30.53,23.16 C30.66,23.24 30.76,23.34 30.83,23.48 C30.95,23.69 31,23.93 31,24.58 L31,25.43 C31,26.07 30.95,26.31 30.84,26.53 C30.7666093,26.6604396 30.6548984,26.7651686 30.52,26.83 C30.31,26.95 30.07,27 29.42,27 L12.58,27 C11.94,27 11.7,26.95 11.48,26.84 C11.3495604,26.7666093 11.2448314,26.6548984 11.18,26.52 C11.06,26.31 11.01,26.07 11.01,25.42 L11.01,24.57 C11.01,23.93 11.06,23.69 11.17,23.47 C11.2433907,23.3395604 11.3551016,23.2348314 11.49,23.17 C11.7,23.05 11.94,23 12.59,23 L12.58,23 Z M12.58,9 C11.56,9 11.02,9.14 10.53,9.4 C10.05,9.66 9.66,10.05 9.4,10.53 C9.14,11.03 9,11.56 9,12.57 L9,13.43 C9,14.43 9.14,14.98 9.4,15.47 C9.66,15.95 10.05,16.34 10.53,16.6 C11.03,16.86 11.56,17 12.57,17 L37.43,17 C38.43,17 38.98,16.86 39.47,16.6 C39.95,16.34 40.34,15.95 40.6,15.47 C40.86,14.97 41,14.44 41,13.43 L41,12.57 C41,11.57 40.86,11.02 40.6,10.53 C40.344478,10.0490526 39.9509474,9.65552203 39.47,9.4 C38.8374445,9.0882953 38.1334284,8.95025294 37.43,9 L12.57,9 L12.58,9 Z M12.58,11 L37.43,11 C38.07,11 38.31,11.05 38.53,11.16 C38.66,11.24 38.76,11.34 38.83,11.48 C38.95,11.69 39,11.93 39,12.58 L39,13.43 C39,14.07 38.95,14.31 38.84,14.53 C38.7666093,14.6604396 38.6548984,14.7651686 38.52,14.83 C38.31,14.95 38.07,15 37.42,15 L12.58,15 C11.94,15 11.7,14.95 11.48,14.84 C11.3495604,14.7666093 11.2448314,14.6548984 11.18,14.52 C11.06,14.31 11.01,14.07 11.01,13.42 L11.01,12.57 C11.01,11.93 11.06,11.69 11.17,11.47 C11.2433907,11.3395604 11.3551016,11.2348314 11.49,11.17 C11.7,11.05 11.94,11 12.59,11 L12.58,11 Z M12.58,33 C11.56,33 11.02,33.14 10.53,33.4 C10.05,33.66 9.66,34.05 9.4,34.53 C9.14,35.03 9,35.56 9,36.57 L9,37.43 C9,38.43 9.14,38.98 9.4,39.47 C9.66,39.95 10.05,40.34 10.53,40.6 C11.03,40.86 11.56,41 12.57,41 L17.43,41 C18.43,41 18.98,40.86 19.47,40.6 C19.95,40.34 20.34,39.95 20.6,39.47 C20.86,38.97 21,38.44 21,37.43 L21,36.57 C21,35.57 20.86,35.02 20.6,34.53 C20.344478,34.0490526 19.9509474,33.655522 19.47,33.4 C18.8374445,33.0882953 18.1334284,32.9502529 17.43,33 L12.57,33 L12.58,33 Z" id="Shape"></path>
                        </svg>
                        <svg class="fill-current text-emerald-950 w-24 sm:w-28 md:w-36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 22">
                            <path transform="translate(-69.000000, -15.000000)" d="M69.92,36 L69.92,16.4 L83.98,16.4 L83.98,21.72 L75.98,21.72 L75.98,24.3 L83.36,24.3 L83.36,29.22 L75.97,29.22 L75.97,36 L69.92,36 Z M86.16,19.7 L86.16,15.7 L92.2,15.7 L92.2,19.7 L86.16,19.7 Z M86.24,36 L86.24,20.71 L92.09,20.71 L92.09,36 L86.24,36 Z M102.02,36.36 C97.43,36.36 94.38,33.42 94.38,28.58 L94.38,28.22 C94.38,23.54 97.35,20.35 101.52,20.35 C106.22,20.35 108.6,23.74 108.6,28.52 L108.6,30.01 L99.95,30.01 C100.35,31.3 101.3,31.91 102.55,31.91 C103.7,31.91 104.68,31.38 105.58,30.54 L108.27,33.74 C106.654338,35.4628136 104.381217,36.415706 102.02,36.36 Z M99.87,27.12 L103.26,27.12 C103.14,25.42 102.47,24.63 101.52,24.63 C100.65,24.63 100.04,25.42 99.87,27.13 L99.87,27.12 Z M110.89,36 L110.89,15.7 L116.74,15.7 L116.74,36 L110.89,36 Z M124.69,36.36 C121.58,36.36 119.09,33.73 119.09,28.69 L119.09,28.13 C119.09,22.98 121.61,20.35 124.63,20.35 C126.65,20.35 127.77,21.27 128.69,22.45 L128.69,15.7 L134.57,15.7 L134.57,36 L128.69,36 L128.69,34.18 C127.74,35.36 126.7,36.36 124.69,36.36 Z M126.82,31.44 C128.02,31.44 128.8,30.24 128.8,28.58 L128.8,28.13 C128.8,26.48 128.02,25.28 126.82,25.28 C125.58,25.28 124.82,26.48 124.82,28.13 L124.82,28.58 C124.82,30.23 125.58,31.44 126.82,31.44 Z M146.63,36.39 C141.2,36.39 136.92,32.64 136.92,26.48 L136.92,25.95 C136.92,20.01 141.12,16.01 146.63,16.01 C149.46,16.01 151.67,16.88 153.69,18.5 L150.49,22.95 C149.49,22.05 148.34,21.41 146.89,21.41 C144.67,21.41 143.02,23.21 143.02,26.11 L143.02,26.45 C143.02,29.59 144.67,31.27 146.82,31.27 C147.383816,31.3024875 147.946188,31.1851829 148.45,30.93 L148.45,28.58 L145.76,28.58 L145.76,24.32 L154.06,24.32 L154.06,33.92 C151.921979,35.5373032 149.310777,36.4053609 146.63,36.39 Z M163.79,36.36 C159.31,36.36 156.17,33.12 156.17,28.64 L156.17,28.14 C156.17,23.65 159.34,20.34 163.84,20.34 C168.32,20.34 171.46,23.6 171.46,28.08 L171.46,28.58 C171.46,33.06 168.3,36.36 163.79,36.36 Z M163.84,31.41 C165.02,31.41 165.78,30.29 165.78,28.52 L165.78,28.19 C165.78,26.42 164.96,25.3 163.78,25.3 C162.61,25.3 161.88,26.42 161.88,28.16 L161.88,28.5 C161.88,30.29 162.67,31.4 163.84,31.4 L163.84,31.41 Z M177.61,36.34 C175.04,36.34 173.19,34.71 173.19,31.69 L173.19,31.49 C173.19,28.3 175.23,26.7 178.31,26.7 C179.49,26.7 180.78,26.96 181.45,27.26 L181.45,27.01 C181.45,25.67 180.66,24.94 178.98,24.94 C177.5,24.94 176.27,25.36 175.32,25.78 L174.12,21.58 C176.007043,20.8315286 178.019959,20.4513487 180.05,20.46 C182.74,20.46 184.53,21.05 185.73,22.26 C186.83,23.34 187.3,24.83 187.3,26.93 L187.3,36 L181.42,36 L181.42,34.54 C180.498453,35.6935987 179.096389,36.357734 177.62,36.34 L177.61,36.34 Z M179.91,32.78 C180.81,32.78 181.48,32.05 181.48,30.71 L181.48,29.7 C181.101916,29.5335665 180.693092,29.4483948 180.28,29.45 C179.24,29.45 178.68,30.2 178.68,31.13 L178.68,31.3 C178.68,32.2 179.21,32.78 179.91,32.78 Z M189.87,36 L189.87,15.7 L195.72,15.7 L195.72,36 L189.87,36 Z" id="Shape"></path>
                        </svg>
                    </a>
                    <ol class="absolute text-emerald-700 bg-white mt-px shadow top-16 w-full z-10 sm:-mx-0 sm:bg-transparent sm:flex sm:items-center sm:mt-0 sm:shadow-none sm:static sm:w-auto sm:font-bold hidden">
                        <li>
                            <a class="block mx-6 sm:mx-3 md:mx-6 no-underline py-5 sm:hover:underline" href="/">
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a class="block border-t px-6 sm:px-0 sm:mx-3 md:mx-6 no-underline py-5 sm:border-t-0 sm:border-transparent sm:hover:underline" href="/">
                                Docs
                            </a>
                        </li>
                        <li>
                            <a class="ease-in-out duration-200 text-white bg-emerald-700 hover:bg-emerald-950 hidden sm:block sm:mx-3 md:mx-6 rounded-lg uppercase px-5 py-3" href="/">
                                Start Free Trial
                            </a>
                        </li>
                    </ol>
                </nav>

                <h1 class="font-black leading-tight mb-6 text-3xl text-emerald-950 sm:text-4xl md:mb-8 md:text-5xl">Don't build a whole backend<br class="hidden sm:block"> just for one stupid form.</h1>
                <h2 class="font-normal items-start mb-6 text-emerald-600 text-xl sm:mb-12 sm:text-2xl md:mb-20">FieldGoal provides form endpoints as a service, <br class="hidden sm:block">so your simple sites can stay simple.</h2>

                <div class="relative">
                    <img src="/mail.svg" class="fill-current w-full sm:hidden md:-mr-16 md:-mt-16 md:absolute md:block md:h-80 md:right-0 md:top-0 md:w-96 lg:-mt-13 lg:w-112" alt="mail icon">

                    <div class="-mt-20 bg-emerald-200 px-2 py-4 relative rounded-lg text-center text-sm z-10 sm:hidden">
                        &lt;<span class="text-pink-code">form</span> <span class="text-green-code">action</span>=<span class="text-yellow-code">"https://fieldgoal.io/f/tGhtN"</span>&gt;
                    </div>

                    <div class="font-mono hidden sm:flex">
                        <div class="bg-emerald-500 flex-col hidden leading-loose pl-6 pr-4 py-6 rounded-l-md text-white text-xs sm:flex md:hidden lg:flex">
                            <span class="mb-3">1</span>
                            <span class="mb-3">2</span>
                            <span class="mb-3">3</span>
                            <span class="mb-3">4</span>
                            <span>5</span>
                        </div>
                        <div class="bg-emerald-950 flex flex-col px-10 py-6 rounded-lg text-white text-xs w-full sm:px-6 md:text-xxs sm:rounded-l-none md:rounded-l-md lg:px-10 lg:rounded-l-none lg:text-sm">
                            <span class="mb-5 md:mb-4">
                                <span class="px-1 py-1 rounded-sm" style="background: rgba(230, 235, 241, 0.19);">&lt;<span class="text-pink-300">form</span> <span class="text-green-300">action</span>=<span class="text-yellow-300">"https://fieldgoal.io/f/tGhtN"</span> <span class="text-green-300">method</span>=<span class="text-yellow-300">"POST"</span>&gt;</span>
                            </span>
                            <span class="mb-5 pl-8 md:mb-4">
                                &lt;<span class="text-pink-300">input</span> <span class="text-green-300">type</span>=<span class="text-yellow-300">"text"</span> <span class="text-green-300">name</span>=<span class="text-yellow-300">"first_name"</span>&gt;
                            </span>
                            <span class="mb-5 pl-8 md:mb-4">
                                &lt;<span class="text-pink-300">input</span> <span class="text-green-300">type</span>=<span class="text-yellow-300">"text"</span> <span class="text-green-300">name</span>=<span class="text-yellow-300">"last_name"</span>&gt;
                            </span>
                            <span class="mb-5 pl-8 md:mb-4">
                                &lt;<span class="text-pink-300">button</span> <span class="text-green-300">type</span>=<span class="text-yellow-300">"submit"</span>&gt;Submit&lt;/<span class="text-pink-300">button</span>&gt;
                            </span>
                            <span>
                                &lt;/<span class="text-pink-300">form</span>&gt;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto mb-32">
            <h3 class="font-bold mb-10 text-emerald-950 text-2xl sm:mb-16 sm:text-3xl">Capturing form submissions<br class="hidden sm:block"> has never been this hassle-free.</h3>

            <div class="flex flex-col md:flex-row gap-4">
                <div>
                    <span class="flex font-bold items-center mb-3 text-emerald-900">
                        <img src="/check.svg" class="fill-current mr-2" alt="check icon">
                        Build your form your way
                    </span>
                    <p class="text-emerald-700">You already know HTML and CSS, so build your form exactly the way you want to. We don't get in your way with JavaScript widgets, WYSIWYG editors, or janky iframes.</p>
                </div>
                <div>
                    <span class="flex font-bold items-center mb-3 text-emerald-900">
                        <img src="/check.svg" class="fill-current mr-2" alt="check icon">
                        Point your form at FieldGoal
                    </span>
                    <p class="text-emerald-700">Create a new FieldGoal endpoint and we'll give you a unique URL to point your form at. Add it as your form's action attribute and you're all set.</p>
                </div>
                <div>
                    <span class="flex font-bold items-center mb-3 text-emerald-900">
                        <img src="/check.svg" class="fill-current mr-2" alt="check icon">
                        Delivered to where you desire
                    </span>
                    <p class="text-emerald-700">With Zapier integration, you can get your submissions delivered to wherever you desire. <a href="https://zapier.com/apps/fieldgoal/integrations" class="classic-link">Learn more about using Zapier to integrate apps with FieldGoal.</a></p>
                </div>
            </div>
        </div>

        <div class="container mx-auto z-10">
            <div class="-mb-12 bg-white p-8 mx-auto relative rounded-md shadow-2xl w-3/4">
                <div class="font-bold mb-8 relative text-center">
                    <p class="text-lg sm:text-xl md:text-2xl text-emerald-700">
                        <span class="align-text-bottom hidden mr-2 opacity-30  text-7xl md:inline" style="line-height: 0;">“</span>
                            FieldGoal saved me hours of boilerplate <br class="hidden md:block">form creation. I love it!
                        <span class="align-text-bottom hidden ml-2 opacity-30 text-7xl md:inline" style="line-height: 0;">”</span>
                    </p>
                </div>
                <div class="mb-6 text-center text-sm text-emerald-700">Taylor Otwell, Creator of Laravel</div>
                <div class="flex justify-center bg-red">
                    <div class="-mb-6 absolute bottom-0 h-16 w-16">
                        <img alt="avatar man" class="rounded-full shadow-md" src="/Avatar-man.jpg">
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-emerald-700">
            <div class="container mx-auto">
                <div class="mb-64 mt-40 text-center sm:mb-60">
                    <h4 class="font-bold text-3xl text-white sm:text-4xl mb-2">Simple Pricing</h4>
                    <h5 class="text-xl text-emerald-100 sm:text-2xl">Always know what you’ll pay.</h5>
                </div>
            </div>
        </div>

        <div class="-mt-44 container mx-auto flex flex-col sm:flex-row sm:items-center">
            <div class="rounded-t-md sm:rounded-lg sm:shadow-xl sm:w-3/5 sm:z-10">
                <div class="bg-emerald-50 font-bold px-10 py-6 rounded-t-md text-blue uppercase">
                    Pricing Plans
                </div>
                <div class="bg-white p-6 text-sm sm:pb-10 sm:pt-8 sm:px-10 sm:rounded-b-md sm:text-xs md:text-sm">
                    <p class="mb-4 text-emerald-800">Fieldgoal offers plans if you need a single form for your personal website or need forms to support all of your clients.</p>
                    <span class="block mb-8 text-emerald-800">All of our plans include:</span>
                    <ol>
                        <li class="flex items-center mb-6 text-emerald-950">
                            <svg class="fill-current leading-none mr-4" width="18px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20">
                                <g transform="translate(-299.000000, -1688.000000)">
                                    <g transform="translate(250.000000, 1468.000000)">
                                        <path d="M57,232.585786 L57,221 C57,220.447715 57.4477153,220 58,220 C58.5522847,220 59,220.447715 59,221 L59,232.585786 L62.2928932,229.292893 C62.6834175,228.902369 63.3165825,228.902369 63.7071068,229.292893 C64.0976311,229.683418 64.0976311,230.316582 63.7071068,230.707107 L58.7071068,235.707107 C58.3165825,236.097631 57.6834175,236.097631 57.2928932,235.707107 L52.2928932,230.707107 C51.9023689,230.316582 51.9023689,229.683418 52.2928932,229.292893 C52.6834175,228.902369 53.3165825,228.902369 53.7071068,229.292893 L57,232.585786 Z M49,235 C49,234.447715 49.4477153,234 50,234 C50.5522847,234 51,234.447715 51,235 L51,238 L65,238 L65,235 C65,234.447715 65.4477153,234 66,234 C66.5522847,234 67,234.447715 67,235 L67,238 C67,239.104569 66.1045695,240 65,240 L51,240 C49.8954305,240 49,239.104569 49,238 L49,235 Z"></path>
                                    </g>
                                </g>
                            </svg>
                            <span class="font-bold text-emerald-950">Store unlimited submissions</span>
                        </li>
                        <li class="flex items-center mb-6 text-emerald-950">
                            <svg class="fill-current leading-none mr-4" width="20px" height="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                                <g transform="translate(-298.000000, -1732.000000)" fill-rule="nonzero">
                                    <g transform="translate(250.000000, 1468.000000)">
                                        <path d="M50,264 L66,264 C67.1045695,264 68,264.895431 68,266 L68,278 C68,279.104569 67.1045695,280 66,280 L50,280 C48.8954305,280 48,279.104569 48,278 L48,266 C48,264.895431 48.8954305,264 50,264 Z M66,267.283886 L66,266 L50,266 L50,267.283886 L58,271 L66,267.283886 Z M66,270 L58.4472136,273.604303 C58.1656861,273.738652 57.8343139,273.738652 57.5527864,273.604303 L50,270 L50,278 L66,278 L66,270 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </svg>
                            <span class="font-bold text-emerald-950">Email Forwarding</span>
                        </li>
                        <li class="flex items-center mb-6 text-emerald-950">
                            <svg class="fill-current leading-none mr-4" width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <g transform="translate(-298.000000, -1772.000000)">
                                    <g transform="translate(250.000000, 1468.000000)">
                                        <path d="M58,304 C63.5228475,304 68,308.477153 68,314 C68,319.522847 63.5228475,324 58,324 C52.4771525,324 48,319.522847 48,314 C48,308.477153 52.4771525,304 58,304 Z M58,306 C53.581722,306 50,309.581722 50,314 C50,318.418278 53.581722,322 58,322 C62.418278,322 66,318.418278 66,314 C66,309.581722 62.418278,306 58,306 Z M58,315 C57.4477153,315 57,314.552285 57,314 L57,310 C57,309.447715 57.4477153,309 58,309 C58.5522847,309 59,309.447715 59,310 L59,314 C59,314.552285 58.5522847,315 58,315 Z M58,319 C57.4477153,319 57,318.552285 57,318 C57,317.447715 57.4477153,317 58,317 C58.5522847,317 59,317.447715 59,318 C59,318.552285 58.5522847,319 58,319 Z"></path>
                                    </g>
                                </g>
                            </svg>
                            <span class="font-bold text-emerald-950">Spam blocking</span>
                        </li>
                        <li class="flex items-center mb-6 text-emerald-950">
                            <svg class="fill-current leading-none mr-4" width="18px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                                <path d="M250 200.087c-.01 14.862-2.727 29.09-7.68 42.224-13.132 4.955-27.366 7.68-42.234 7.69h-.172c-14.86-.01-29.09-2.727-42.222-7.68-4.954-13.132-7.682-27.366-7.692-42.232v-.173c.01-14.862 2.732-29.09 7.678-42.223 13.138-4.954 27.37-7.68 42.236-7.69h.172c14.868.01 29.102 2.736 42.233 7.69 4.952 13.134 7.67 27.362 7.68 42.224v.173zm147.22-33.42H280.474l82.55-82.55a200.92 200.92 0 0 0-21.612-25.548l-.004-.006a201.057 201.057 0 0 0-25.524-21.59l-82.55 82.55V2.782A201.232 201.232 0 0 0 200.104 0h-.212a201.23 201.23 0 0 0-33.226 2.78v116.747l-82.55-82.55a200.942 200.942 0 0 0-25.535 21.6l-.03.027a201.01 201.01 0 0 0-21.574 25.512l82.55 82.55H2.78S.004 188.596 0 199.926v.145a201.324 201.324 0 0 0 2.78 33.264h116.746l-82.55 82.55a201.137 201.137 0 0 0 47.14 47.14l82.55-82.548V397.22A201.347 201.347 0 0 0 199.86 400h.286a201.44 201.44 0 0 0 33.19-2.78V280.473l82.55 82.55a201.038 201.038 0 0 0 25.528-21.592l.02-.017a201.182 201.182 0 0 0 21.59-25.527l-82.55-82.552H397.22a201.347 201.347 0 0 0 2.78-33.19v-.287a201.44 201.44 0 0 0-2.78-33.19z" fill-rule="evenodd"></path>
                            </svg>
                            <span class="font-bold text-emerald-950">Zapier integration</span>
                        </li>
                        <li class="flex items-center text-emerald-950">
                            <svg class="fill-current leading-none mr-4" width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path>
                            </svg>
                            <span class="font-bold text-emerald-950">File uploads to S3</span>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="sm:-ml-4 sm:w-3/5">
                <div class="bg-white pb-6 sm:px-10 sm:py-6 sm:rounded-t-md">
                    <table class="w-full text-emerald-950 text-sm sm:text-xs md:text-sm">
                        <tbody>
                            <tr class="border-t border-gray-dark  sm:border-0 ">
                                <td class="pl-6 py-3 sm:pl-0">Single</td>
                                <td class="py-3"><span class="font-bold">1</span>  form </td>
                                <td class="pr-6 py-3 text-right sm:pr-0"><span class="bg-gray-darkest font-bold px-2 py-1 rounded-sm">$5 / mo</span></td>
                            </tr>
                            <tr class="border-t border-gray-dark ">
                                <td class="pl-6 py-3 sm:pl-0">Freelancer</td>
                                <td class="py-3"><span class="font-bold">5</span>  forms </td>
                                <td class="pr-6 py-3 text-right sm:pr-0"><span class="bg-gray-darkest font-bold px-2 py-1 rounded-sm">$15 / mo</span></td>
                            </tr>
                            <tr class="border-t border-gray-dark ">
                                <td class="pl-6 py-3 sm:pl-0">Studio</td>
                                <td class="py-3"><span class="font-bold">15</span>  forms </td>
                                <td class="pr-6 py-3 text-right sm:pr-0"><span class="bg-gray-darkest font-bold px-2 py-1 rounded-sm">$39 / mo</span></td>
                            </tr>
                            <tr class="border-t border-gray-dark ">
                                <td class="pl-6 py-3 sm:pl-0">Agency</td>
                                <td class="py-3"><span class="font-bold">50</span>  forms </td>
                                <td class="pr-6 py-3 text-right sm:pr-0"><span class="bg-gray-darkest font-bold px-2 py-1 rounded-sm">$79 / mo</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a href="/ " class="flex flex-row items-center justify-center gap-2 bg-emerald-700 font-bold no-underline py-6 rounded-b-md text-white text-center tracking-wider uppercase">
                    Start Free Trial 
                    <svg class="fill-current inline-block ml-1 text-white" width="18px" height="14px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14">
                        <g transform="translate(-1030.000000, -1764.000000)">
                            <g transform="translate(250.000000, 1468.000000)">
                                <path d="M794.585786,304 L781,304 C780.447715,304 780,303.552285 780,303 C780,302.447715 780.447715,302 781,302 L794.585786,302 L790.292893,297.707107 C789.902369,297.316582 789.902369,296.683418 790.292893,296.292893 C790.683418,295.902369 791.316582,295.902369 791.707107,296.292893 L797.707107,302.292893 C798.097631,302.683418 798.097631,303.316582 797.707107,303.707107 L791.707107,309.707107 C791.316582,310.097631 790.683418,310.097631 790.292893,309.707107 C789.902369,309.316582 789.902369,308.683418 790.292893,308.292893 L794.585786,304 Z"></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({ layout: 'landing' })
</script>