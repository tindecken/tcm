var users = [
	{
		name: 'Thai Hoang Nguyen',
		email: 'thaihoang.nguyen@acomsolutions.com',
		password: 'rivaldo',
		id: 'thaihoang.nguyen@acomsolutions.com',
		categories: ['category_bank_account'],
		testsuites: [],
		type: 'user'
	},
	{
		name: 'Thien Vo',
		email: 'thien.vo@acomsolutions.com',
		password: 'rivaldo',
		type: 'user',
		id: 'thien.vo@acomsolutions.com',
		testsuites: [],
		categories: ['category_payment']
	},
]

var categories = [
	{
		name: 'Bank Account',
		description: 'Bank Account Category',
		user: 'thaihoang.nguyen@acomsolutions.com',
		id: 'category_bank_account',
		type: 'category',
		testsuites: ['testsuite_pending', 'testsuite_approval'],
	},
	{
		name: 'Payment',
		description: 'Payment Category',
		user: 'thien.vo@acomsolutions.com',
		id: 'category_payment',
		type: 'category',
		testsuites: ['testsuite_notification', 'testsuite_ach'],
	}
]

var testsuites = [
	{
		name: 'Pending',
		description: 'testsuite Pending',
		user: 'thaihoang.nguyen@acomsolutions.com',
		id: 'testsuite_pending',
		type: 'testsuite',
		testgroups: ['testgroup_preconfig_pending', 'testgroup_primary_pending'],
		testcases: ['testcase_pending_1', 'testcase_pending_2'],
		category: 'category_payment'
	},
	{
		name: 'Approval',
		description: 'testsuite Aproval',
		user: 'thien.vo@acomsolutions.com',
		id: 'testsuite_approval',
		type: 'testsuite',		
		testgroups: ['testgroup_preconfig_approval', 'testgroup_primary_approval'],
		testcases: ['testcase_approval_1', 'testcase_approval_2'],
		category: 'category_payment'
	},
	{
		name: 'Notification',
		description: 'testsuite Notification',
		user: 'thaihoang.nguyen@acomsolutions.com',
		id: 'testsuite_notification',
		type: 'testsuite',
		testgroups: ['testgroup_preconfig_notification', 'testgroup_primary_notification'],
		testcases: [],
		category: 'category_bank_account'
	},
	{
		name: 'ACH',
		description: 'testsuite ACH',
		user: 'thien.vo@acomsolutions.com',
		id: 'testsuite_ach',
		type: 'testsuite',
		testgroups: ['testgroup_preconfig_ach', 'testgroup_primary_ach'],
		testcases: [],
		category: 'category_bank_account'
	}
]

var testgroups = [
	{
		name: 'Group Preconfig Pending',
		description: 'testgroup Preconfig Pending',
		id: 'testgroup_preconfig_pending',
		testcases: ['testcase_preconfig_pending_1', 'testcase_preconfig_pending_2'],
		testsuite: 'testsuite_pending'
	},
	{
		id: 'testgroup_primary_pending',
		name: 'Group Primary Pending',
		description: 'testgroup Primary Pending',
		testcases: ['testcase_primary_pending_1', 'testcase_primary_pending_2'],
		testsuite: 'testsuite_pending'
	},
	{
		id: 'testgroup_preconfig_approval',
		name: 'Group Preconfig Approval',
		description: 'testgroup Preconfig Aproval',
		testcases: ['testcase_preconfig_approval_1', 'testcase_preconfig_approval_2'],
		testsuite: 'testsuite_approval'
	},
	{
		id: 'testgroup_primary_approval',
		name: 'Group Primary Approval',
		description: 'testgroup Primary Aproval',
		testcases: ['testcase_primary_approval_1', 'testcase_primary_approval_2'],
		testsuite: 'testsuite_approval'
	},
	{
		id: 'testgroup_preconfig_notification',
		name: 'Group Preconfig Notification',
		description: 'testgroup Preconfig Notification',
		testcases: ['testcase_preconfig_notification_1'],
		testsuite: 'testsuite_notification'
	},
	{
		id: 'testgroup_primary_notification',
		name: 'Group Primary Notification',
		description: 'testgroup Primary Notification',
		testcases: ['testcase_primary_notification_1'],
		testsuite: 'testsuite_notification'
	},
	{
		id: 'testgroup_preconfig_ach',
		name: 'Group Preconfig ACH',
		description: 'testgroup Preconfig ACH',
		testcases: ['testcase_preconfig_ach_1'],
		testsuite: 'testsuite_ach'
	},
	{
		id: 'testgroup_primary_ach',
		name: 'Group Primary ACH',
		description: 'testgroup Primary ACH',
		testcases: ['testcase_primary_ach_1'],
		testsuite: 'testsuite_ach'
	}
]

var testcases = [
	{
		id: 'testcase_pending_1',
		name: 'Testcase Pending 1',
		description: 'testcase Pending 1',
		type: 'testcase',
		keywords: [],
		testsuite: 'testsuite_pending'
	},
	{
		id: 'testcase_pending_2',
		name: 'Testcase Pending 2',
		description: 'testcase Pending 2',
		type: 'testcase',
		keywords: [],
		testsuite: 'testsuite_pending'
	},
	{
		id: 'testcase_approval_1',
		name: 'Testcase Aproval 1',
		description: 'testcase Aproval 1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_approval',
		testsuite: ''
	},
	{
		id: 'testcase_approval_2',
		name: 'Testcase Aproval 2',
		description: 'testcase Aproval 2',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_approval',
		testsuite: ''
	},
	{
		id: 'testcase_preconfig_pending_1',
		name: 'Testcase Preconfig Pending 1',
		description: 'testcase Preconfig Pending 1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_pending',
		testsuite: ''
	},
	{
		id: 'testcase_preconfig_pending_2',
		name: 'Testcase Preconfig Pending 2',
		description: 'testcase Preconfig Pending 2',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_pending',
		testsuite: ''
	},
	{
		id: 'testcase_primary_pending_1',
		name: 'Testcase Primary Pending1',
		description: 'testcase Primary Pending 1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_pending',
		testsuite: ''
	},
	{
		id: 'testcase_primary_pending_2',
		name: 'Testcase Primary Pending2',
		description: 'testcase Primary Pending 2',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_pending',
		testsuite: ''
	},
	{
		id: 'testcase_preconfig_approval_1',
		name: 'Testcase Preconfig Approval 1',
		description: 'testcase Preconfig Aproval 1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_approval',
		testsuite: ''
	},
	{
		id: 'testcase_preconfig_approval_2',
		name: 'Testcase Preconfig Approval 2',
		description: 'testcase Preconfig Aproval 2',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_approval',
		testsuite: ''
	},
	{
		id: 'testcase_primary_approval_1',
		name: 'Testcase Primary Approval 1',
		description: 'testcase Primary Aproval 1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_approval',
		testsuite: ''
	},
	{
		id: 'testcase_primary_approval_2',
		name: 'Testcase Primary Approval 2',
		description: 'testcase Primary Aproval 2',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_approval',
		testsuite: ''
	},
	{
		id: 'testcase_preconfig_notification_1',
		name: 'Testcase Preconfig Notification 1',
		description: 'testcase Preconfig Notification ',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_notification',
		testsuite: ''
	},
	{
		id: 'testcase_primary_notification_1',
		name: 'Testcase Primary Notification 1',
		description: 'testcase Primary Notification 1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_notification',
		testsuite: ''
	},
	{
		id: 'testcase_preconfig_ach_1',
		name: 'Testcase Preconfig ACH1',
		description: 'testcase Preconfig ACH1',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_preconfig_ach',
		testsuite: ''
	},
	{
		id: 'testcase_primary_ach_1',
		name: 'Testcase Primary ACH 1',
		description: 'testcase Primary ACH ',
		type: 'testcase',
		keywords: [],
		testgroup: 'testgroup_primary_ach',
		testsuite: ''
	}
]

export default { 
	users,
	categories,
	testsuites,
	testgroups,
	testcases
}