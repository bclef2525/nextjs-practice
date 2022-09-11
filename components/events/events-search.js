import LinkButton from "../ui/link-button"
import { useRef } from "react"
function EventsSearch(props) {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  const onSubmit = (event) => {
    event.preventDefault()

    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    props.onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className="flex justify-center py-10">
      <div className="flex">
        <div className="flex items-center">
          <label className={styles.label} htmlFor="year">
            Year
          </label>
          <select ref={yearInputRef} className={styles.select} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex items-center mx-10">
          <label className={styles.label} htmlFor="month">
            Month
          </label>
          <select ref={monthInputRef} className={styles.select} id="month">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <LinkButton onClick={onSubmit}>Find Events</LinkButton>
    </form>
  )
}

export default EventsSearch

const styles = {
  label:
    "mx-10 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 w-28",
  select:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
}
