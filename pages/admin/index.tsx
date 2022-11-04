import Authenticated from "../../components/common/Authenticated";

export default function Admin() {
  return (
    <Authenticated redirectTo="/error">
      <div>
        ADMIN PAGES
      </div>
    </Authenticated>
  )
}
