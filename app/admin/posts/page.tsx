import Link from 'next/link'

export default function Posts() {
  return (
    <div className="p-5">
      <div className="mb-5 space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
        <Link href="admin/posts/new" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> New </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-skin-fill bg-opacity-10">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-skin-base border-opacity-30 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-skin-fill hover:bg-opacity-5">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-skin-base border-opacity-30 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                Sliver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-skin-fill hover:bg-opacity-5">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-skin-base border-opacity-30 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                White
              </td>
              <td className="px-6 py-4">
                Laptop PC
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
          <span className="text-sm font-normal">Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">1000</span></span>
          <ul className="inline-flex items-center -space-x-px">
            <li className="block px-3 py-2 ml-0 leading-tight bg-white border border-skin-base border-opacity-30 rounded-l-lg hover:bg-skin-fill hover:bg-opacity-5">
              <a href="#">
                <span className="sr-only">Previous</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </a>
            </li>
            <li className="block px-3 py-2 leading-tight bg-white border border-r-0 border-skin-base border-opacity-30 hover:bg-skin-fill hover:bg-opacity-5">
              <a href="#">1</a>
            </li>
            <li className="block px-3 py-2 leading-tight bg-white border border-r-0 border-skin-base border-opacity-30 hover:bg-skin-fill hover:bg-opacity-5">
              <a href="#">2</a>
            </li>
            <li className="block z-10 px-3 py-2 leading-tight border border-r-0 border-skin-base border-opacity-30 bg-skin-fill bg-opacity-5">
              <a href="#" aria-current="page">3</a>
            </li>
            <li className="block px-3 py-2 leading-tight bg-white border border-r-0 border-skin-base border-opacity-30 hover:bg-skin-fill hover:bg-opacity-5">
              <a href="#">...</a>
            </li>
            <li className="block px-3 py-2 leading-tight bg-white border border-r-0 border-skin-base border-opacity-30 hover:bg-skin-fill hover:bg-opacity-5">
              <a href="#">100</a>
            </li>
            <li className="block px-3 py-2 leading-tight bg-white border border-skin-base border-opacity-30 rounded-r-lg hover:bg-skin-fill hover:bg-opacity-5">
              <a href="#">
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}
