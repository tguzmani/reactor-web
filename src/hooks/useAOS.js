import { useEffect } from 'react'
import AOS from 'aos'

const useAOS = () => {
  useEffect(() => {
    const AOS = require('aos')
    AOS.init()
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })
}

export default useAOS
