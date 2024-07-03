import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AttendanceSystem from '@components/pages/AttendanceSystem'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'AttendanceSystem'])),
    },
  }
}

export default AttendanceSystem