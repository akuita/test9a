import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AttendanceSystemPage from '@components/pages/AttendanceSystem'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'AttendanceSystem'])),
      seo: {
        title: 'Attendance System',
        description: 'Track and manage employee attendance.',
      },
    },
  }
}

export default AttendanceSystemPage