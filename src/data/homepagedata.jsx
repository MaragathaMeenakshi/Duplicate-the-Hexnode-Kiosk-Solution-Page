import idc from '../asset/idc.webp';
import gartner from '../asset/gartner.webp';
import forrester from '../asset/forrester.webp';
import singleappimage from '../asset/singleappimage.webp';
import multiapp from '../asset/multi-app-kiosk-image.webp';
import webbased from '../asset/web-based-kiosk-image.webp';
import digital from '../asset/digital-signage-kiosk-image.webp';
import asam from '../asset/asam-kiosk-image.webp';
import effortless from '../asset/effortless-kiosk-deployement-image.webp';
import customize from '../asset/customized-interface-image.webp';
import easy from '../asset/easy-to-use-interface-image.webp';
import power from '../asset/power-up-protection-image.webp';
import secure from '../asset/secure-app-ecosystem.webp';
import justin from '../asset/justin-modrak.webp';
import dalibor from '../asset/dalibor-kruljac.webp';
import cris from '../asset/chris-robinson.webp';

export const data = [
    { img: idc, text: "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024." },
    { img: gartner, text: "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022." },
    { img: forrester, text: "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023." }
]

export const section3Data = [
    {
        title: "Single App Kiosk",
        img: singleappimage,
        subtitle: "Powerful Single-App Kiosk solutions for enhanced control",
        points: ['Provision the devices to run one specialized application, with limited functionalities.', 'Customize the device settings to cater to a specific use-case each time.',
            'Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.',
            'Empower your administrators with full control over the kiosk devices.',
        ]
    },
    {
        title: 'Multi-App Kiosk',
        img: multiapp,
        subtitle: "Elevate efficiency with Multi-App Kiosk",
        points: [
            'Limit device access to approved apps, ensuring focus and productivity.',
            'With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.',
            'Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.',
            'With Hexnode\'s peripheral settings admins can allow necessary device settings while retaining control.'
        ]
    },
    {
        title: 'Web-based Kiosk',
        img: webbased,
        subtitle: "Explore the new way to manage web apps and websites",
        points: [
            'Let users access essential and approved web apps, website and files only.',
            'Make the best use of website kiosk with Hexnode\'s advanced settings.',
            'Tailor your experience to match your unique use case.',
            'From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.'
        ]
    },
    {
        title: 'Digital Signages',
        img: digital,
        subtitle: "Capture attention with Digital Signage Kiosks",
        points: [
            'Transform your devices into captivating digital signage kiosks that grab attention.',
            'Engage your audience with vibrant images and seamless video streaming.',
            'Customize media files with trimming, muting, and background music.',
            'Advertise and show off your brand aesthetics to attract customers in different ways.',
            'Take control with Hexnode to reestablish your brand\'s presence.'
        ]
    },
    {
        title: 'ASAM Kiosk',
        img: asam,
        subtitle: "Unlock the power of Autonomous Single App Mode (ASAM)",
        points: [
            'A feature that empowers your iOS app to seamlessly secure itself in the foreground.',
            'Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.',
            'Create focused, efficient and secure digital environments to match your requirements.',
            'Configure ASAM effortlessly and elevate your user experience like never before.'
        ]
    }
]

export const section4Data = [
    {
        title: "Effortless kiosk deployment & management",
        paragraph: "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
        img: effortless
    },
    {
        title: "Customized interface for brand visibility",
        paragraph: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
        img: customize
    },
    {
        title: "What more can you do with Hexnode kiosk?",
        paragraph: "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
        img: power
    },
    {
        title: "Secure and update your app ecosystem",
        paragraph: "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
        img: secure
    },
    {
        title: "Provide an easy-to-use interface for end-users",
        paragraph: "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.s.",
        img: easy
    }
]

export const cardData = [
    {
        name: "Justin Modrak",
        profession: ["Technology Coordinator", "East Troy Community School District"],
        quotes: "Hexnode is of great value. Works great with Android and iOS!",
        img: justin
    },
    {
        name: "Dalibor Kruljac",
        profession: ["KAMELEYA LTD"],
        quotes: "Most complete MDM solution I found, and I tested many of them, including major names",
        img: dalibor
    },
    {
        name: "Chris Robinson",
        profession: ["Executive Account Manager, NCS"],
        quotes: "It seemed to be in-line with everything we were looking at.",
        img: cris
    }

]