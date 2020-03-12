<template lang="pug">
  v-container(fluid)
    //- widgets
    v-row
      v-col
        widget-admin-total-employees
      v-col
        widget-admin-absentees
      v-col
        widget-admin-attendees
    //- moah widgets
    v-row
      v-col
        widget-public-events
      v-col
        widget-admin-new-applicants


</template>

<script>
  import WidgetAdminAbsentees from '@/components/widgets/admin/Absentees'
  import WidgetAdminAttendees from '@/components/widgets/admin/Attendees'
  import WidgetAdminNewApplicants from '@/components/widgets/admin/NewApplicants.vue'
  import WidgetAdminTotalEmployees from '@/components/widgets/admin/TotalEmployees.vue'
  import WidgetPublicEvents from '@/components/widgets/public/Events.vue'

  export default {
    name: 'Home',
    components: {
      WidgetAdminAbsentees,
      WidgetAdminAttendees,
      WidgetAdminNewApplicants,
      WidgetAdminTotalEmployees,
      WidgetPublicEvents,
    },
  }
</script>
