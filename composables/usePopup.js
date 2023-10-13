export function usePopup() {
  const isPopipShow = ref(false)

  const openPopup = (popupName) => {
    document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`
    document.body.style.overflow = 'hidden'
    isPopipShow.value = popupName
  }

  const closePopup = () => {
    document.body.style.paddingLeft = ''
    document.body.style.overflow = ''
    isPopipShow.value = false
  }

  return { isPopipShow, openPopup, closePopup }
}