"use client"

const ThemeButton = () => {

    const handleTheme = () => {
        const html = document.documentElement;

        if (html.classList.contains("theme-light")) {
            html.classList.remove("theme-light");
            html.classList.add("theme-dark");
        } else {
            html.classList.remove("theme-dark");
            html.classList.add("theme-light");
        }
    }


    return (
        <div>
            <button className="font-inter text-exsml" onClick={handleTheme}>THEME</button>
        </div>
    );
};

export default ThemeButton;