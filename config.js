// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "KRISHIKAAA",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Lifetime Hate Contract💖💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', 'Krishudiii', '💖', '💝', '💘', 'piggy', '💗', '💓'],  // Heart emojis
        bears: ['Piggy', '🐷', '🧸', '🐽', 'Krishu', '🐻', '🐼']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you hate me or are you just emotionally attached? 😌",                                    // First interaction
            yesBtn: "I hate you🫣.",                                             // Text for "Yes" button
            noBtn: "Same thing🙄.",                                               // Text for "No" button
            secretAnswer: "Big words. Let’s measure this so-called hatred 😏"           // Secret hover message
        },
        second: {
            text: "Rate your hatred for me 🙄",                          // For the love meter
            startText: "current hatred level 👉",                                   // Text before the percentage
            nextBtn: "Increase the chaos 💕"                                         // Text for the next button
        },
        third: {
            text: "So… are we officially stuck with each other for life? 💝😌", // The big question!
            yesBtn: "Unfortunately yes.",                                             // Text for "Yes" button
            noBtn: "As if I have a choice."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Hate you To Eternity and Forever🙂‍↔️💥",  // Shows when they go past 4500%
        high: "Hmm… suspicious. Is this hate or just a little attachment? 👀💝",              // Shows when they go past 1000%
        normal: "Weak. I expected better from you!🤪💔"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Contract Signed. No Escape 🤝❤️",
        message: "Congratulations. You are now legally obligated to hate me forever 😌💣!",
        emojis: "💣😏💖🤝🤗💋❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ff9a9e",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#fad0c4",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff4d6d",     // Button color (should stand out against the background)
        buttonHover: "#ff758f",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#7a1f2b"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "12s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "44px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
// ============================================
// 🚨 EXIT WARNING — CONTRACT BREACH PROTECTION 🚨
// ============================================

window.onbeforeunload = function () {
    return "Leaving already? Contract breach detected 😤";
};
