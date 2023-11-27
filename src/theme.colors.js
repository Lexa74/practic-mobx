export const defaultTheme = {
  colors: {
    brand: {
      0: '#fff',
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
      1000: '#000'
    }
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`
  },
  components: {
    Button: {
      sizes: {
        md: {
          h: '48px',
          fontSize: '18px',
          p: '0 24px'
        }
      },
      variants: {
        brandLight: {
          bg: 'brand.0',
          color: 'brand.800',
          borderWidth: '1px',
          borderColor: 'brand.50',
          _hover: {
            bg: 'brand.200',
            color: 'brand.900'
          }
        },
        brandMedium: {
          bg: 'brand.600',
          _hover: {
            bg: 'brand.800'
          }
        },
        brandDark: {
          bg: 'brand.900',
          color: 'brand.0',
          _hover: {
            bg: 'brand.700',
            color: 'brand.0',
          }
        },
        brandDefault: {
          bg: 'brand.800',
          color: 'brand.0',
          _hover: {
            bg: 'brand.900'
          }
        }
      },
      defaultProps: {
        size: 'lg',
        variant: 'brandDefault'
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            h: '48px',
            color: 'brand.1000',
            bg: 'brand.0',
            fontSize: '18px',
            _placeholder: {
              color: '#A0AEC0'
            }
          }
        }
      }
    },
    Radio: {
      defaultProps: {
        colorScheme: 'brand'
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'brand.0',
        color: 'brand.1000'
      },
      a: {
        color: 'brand.500',
        _hover: {
          color: 'brand.700',
          textDecoration: 'underline'
        }
      }
    }
  }
};
