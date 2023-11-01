import { Button, Table } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { MdKeyboardArrowLeft } from 'react-icons/md'
import {useNavigate} from 'react-router-dom';

// Custom Theme
// const customTheme: CustomFlowbiteTheme = {

//     // Table Custom
//     table: {
//         root: {
//             base: "w-full text-left text-sm md:text-base text-typography-100 dark:text-gray-400",
//             shadow: "absolute dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
//             // wrapper: "relative"
//         },
//         body: {
//             base: "group/body",
//             cell: {
//             base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-4 py-3"
//             }
//         },
//         head: {
//             base: "group/head text-sm md:text-base uppercase text-gray-700 dark:text-gray-400",
//             cell: {
//                 base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50  dark:bg-gray-700 px-4 py-3"
//             }
//         },
//         row: {
//             base: "group/row",
//             hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
//             striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
//         },
//     },

//     // Button Custom
//     button : {
//         base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
//         "fullSized": "w-full",
//         color: {
//             default: "text-white focus:ring-0 focus:ring-transparent dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
//             "dark": "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
//             "failure": "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
//             "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
//             "info": "text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",
//             "light": "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
//             "purple": "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
//             "success": "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
//             "warning": "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
//             "blue": "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
//             "cyan": "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
//             "green": "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
//             "indigo": "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
//             "lime": "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
//             "pink": "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
//             "red": "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
//             "teal": "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
//             "yellow": "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700"
//         },
//         size: {
//             custom : "text-base px-0 py-0",
//             "xs": "text-xs px-2 py-1",
//             "sm": "text-sm px-3 py-1.5",
//             "md": "text-sm px-4 py-2",
//             "lg": "text-base px-5 py-2.5",
//             "xl": "text-base px-6 py-3"
//         }
//     }
// };  

const buttonCustom: CustomFlowbiteTheme['button'] = {
    base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
        "fullSized": "w-full",
    color: {
        default: "text-white focus:ring-0 focus:ring-transparent dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
        },
    size: {
        custom : "text-base px-0 py-0",
        }
};

const tableCustom: CustomFlowbiteTheme['table'] = {
    root: {
        base: "w-full text-left text-xs sm:text-sm md:text-base text-typography-100 dark:text-gray-400",
        shadow: "dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
        // wrapper: "relative"
    },
    body: {
        base: "group/body",
        cell: {
        base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
        }
    },
    head: {
        base: "group/head text-xs md:text-base uppercase text-gray-700 dark:text-gray-400",
        cell: {
            base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50  dark:bg-gray-700"
        }
    },
    row: {
        base: "group/row",
        hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
        striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    },
  };

// Table Data Certification
export default function Data() {
    const navigate = useNavigate()

    return(
        // <Flowbite theme={{ theme: customTheme }} >
        <div className="justify-center md:pl-10 w-full h-auto space-y-5 md:space-y-10 my-auto">
            <Button theme={buttonCustom} onClick={() => navigate('/')} color='default' size='custom' className="bg-transaparent text-typography-300 hover:text-typography-100 fill-typography-300 hover:fill-typography-100">
                <MdKeyboardArrowLeft className="w-6 h-6" />
                <p className='mx-[10px]'>Back</p>
            </Button>
            <h1 className="text-typography-100 text-2xl font-bold text-center md:text-3xl md:text-start lg:text-5xl">Your Certificate Data</h1>
            <Table theme={tableCustom} className='mx-auto'>
                <Table.Body>

                    {/* Certification Number */}
                    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap text-typography-100 dark:text-white">
                        Certification Number
                    </Table.Cell>
                    <Table.Cell>
                        :
                    </Table.Cell>
                    <Table.Cell>
                        03/03/MG/EDU/ALSAV/2023
                    </Table.Cell>
                    </Table.Row>

                    {/* Name */}
                    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap  text-typography-100 dark:text-white">
                        Name
                    </Table.Cell>
                    <Table.Cell>
                        :
                    </Table.Cell>
                    <Table.Cell>
                        DICKI TRI WAHYUDHA
                    </Table.Cell>
                    </Table.Row>

                    {/* Program */}
                    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap  text-typography-100 dark:text-white">
                        Program
                    </Table.Cell>
                    <Table.Cell>
                        :
                    </Table.Cell>
                    <Table.Cell>
                        INTERNSHIP PROGRAM (MAGANG)
                    </Table.Cell>
                    </Table.Row>

                    {/* Periode */}
                    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap  text-typography-100 dark:text-white">
                        Period
                    </Table.Cell>
                    <Table.Cell>
                        :
                    </Table.Cell>
                    <Table.Cell>
                        03 OCTOBER 2023 to 16 MARCH 2024
                    </Table.Cell>
                    </Table.Row>

                    {/* Status */}
                    <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap  text-typography-100 dark:text-white">
                        Status
                    </Table.Cell>
                    <Table.Cell>
                        :
                    </Table.Cell>
                    <Table.Cell className='font-bold text-primary-100'>
                        Valid
                    </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <p className="text-typography-300 text-sm text-center md:text-base lg:text-start">This certificate is issued by <span className='font-bold'>PT. ALSAV SYSTEM DEVELOPMENT</span> and internally validated</p>
        </div>
        // </Flowbite>
    )
}