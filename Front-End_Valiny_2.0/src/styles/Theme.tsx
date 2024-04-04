// Define un tipo para tu tema
    type ThemeType = {
        colors: {
        white: string;
        blue: string;
        darkText: string;
        greyBackground: string;
        greyHover: string;
        };
        typography: {
        regular: string;
        small: string;
        large: string;
        bold: string;
        };
        spacing: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        };
        boxShadow: string;
        mediaQueries: {
        smallDevice: string;
        };
    };

    // Define tu tema
    const Theme: ThemeType = {
        colors: {
        white: '#fff',
        blue: 'rgb(8, 102, 255)',
        darkText: '#000000',
        greyBackground: '#f0f0f0',
        greyHover: '#f0f0f0',
        },
        typography: {
        regular: '24px',
        small: '18px',
        large: '26px',
        bold: 'bold',
        },
        spacing: {
        small: '6px',
        medium: '10px',
        large: '20px',
        xlarge: '40px',
        },
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        mediaQueries: {
        smallDevice: '@media (max-width: 430px)',
        },
    };
    
export default Theme;
  