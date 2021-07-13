import { useMediaQuery } from 'react-responsive'

const useResponsive = which => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 599px)',
  })

  return isMobile
}

export default useResponsive
