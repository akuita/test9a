import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AttendanceSystemPage from '@components/pages/AttendanceSystem'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale = 'en' } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['all'])),
      seo: {
        title: 'Attendance System',
        description: 'Track your attendance with ease.',
      },
    },
  }
}

export default AttendanceSystemPage