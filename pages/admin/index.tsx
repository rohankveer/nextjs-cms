import Authenticated from "../../components/common/Authenticated";
//import { getAuthSession } from "../../lib/session";

export default function Admin({ user }: any) {
  return (
    <Authenticated redirectTo="/error">
      <div>
        <h4>{`Welcome ${user}`}</h4>
        <h6>ADMIN PAGES</h6>
      </div>
    </Authenticated>
  )
}

export async function getStaticProps() {
  return {
    props: {
      user: 'Rohan Veer'
    },
  }
}

/* export async function getServerSideProps(context: any) {
  const authSession = getAuthSession(context);
  if (!authSession) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: authSession.user,
    },
  };
} */
