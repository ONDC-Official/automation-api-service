

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["search"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_12**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_12.1**: $.message.intent.fulfillment.vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_12.2**: every element of $.message.intent.fulfillment.vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_CODE_13**: $.context.location.country.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_CODE_14**: $.context.location.city.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_15**: $.context.domain must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_16**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_17**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_18**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_19**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_20**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_21**: $.context.action must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_22**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_23**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_23** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_24**: $.message.intent.fulfillment.vehicle.category must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_24** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.intent.fulfillment.vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_TYPE_1**: every element of $.message.intent.fulfillment.type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_2**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_4**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["select"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_15**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_17**: $.context.location.country.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_18**: $.context.location.city.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_DOMAIN_19**: $.context.domain must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_20**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_21**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_22**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_23**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_24**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_25**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI_26**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_27**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_28**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_29**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_31**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_32**: $.message.order.provider.id must be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_4**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_6**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_7**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TITLE_8**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TITLE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["init"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_15**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_17**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS_18**: $.message.order.payments[*].status must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_19**: $.message.order.payments[*].type must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_20**: $.context.location.country.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_21**: $.context.location.city.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_DOMAIN_22**: $.context.domain must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_23**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_24**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_25**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_26**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_27**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_28**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI_29**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_30**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_31**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_32**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_33**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_34**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_35**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_36**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS_37**: $.message.order.payments[*].status must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_38**: $.message.order.payments[*].type must be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_4**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_6**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_7**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TITLE_8**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TITLE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["confirm"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_16**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_18**: $.message.order.payments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_19**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_19.1**: $.message.order.payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_19.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition REQUIRED_MESSAGE_STATUS_20**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS_20.1**: $.message.order.payments[*].status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS_20.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition REQUIRED_MESSAGE_TYPE_21**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_21.1**: $.message.order.payments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_21.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_22**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_23**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT_24**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_25**: $.context.location.country.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_26**: $.context.location.city.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_DOMAIN_27**: $.context.domain must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_28**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_29**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_30**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_31**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_32**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_33**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI_34**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_35**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_36**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_37**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_38**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_39**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_40**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_41**: $.message.order.payments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_42**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS_43**: $.message.order.payments[*].status must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_44**: $.message.order.payments[*].type must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_45**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_46**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT_47**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_4**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_6**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TITLE_7**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TITLE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["status"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID_14**: $.message.order_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_15**: $.context.location.country.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CODE_16**: $.context.location.city.code must be present in the payload
	
	- **condition REQUIRED_CONTEXT_DOMAIN_17**: $.context.domain must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_18**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_19**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_20**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_21**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_22**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_23**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI_24**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_25**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_26**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_27**: $.context.bpp_uri must be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["cancel"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID_14**: $.message.order_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CANCELLATION_REASON_ID_15**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_16**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_16.1**: $.message.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_16.2**: every element of $.message.descriptor.code must be in ["SOFT_CANCEL", "CONFIRM_CANCEL"]
	
	- **condition REQUIRED_MESSAGE_NAME_17**: $.message.descriptor.name must be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["update"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATE_TARGET_14**: $.message.update_target must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.id must be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CATEGORY_2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_4**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_6**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_7**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY_8**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_9**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TITLE_10**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TITLE_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_search"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_14**: $.message.catalog.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.catalog.providers[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_16**: $.message.catalog.providers[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_18**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_18.1**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_18.2**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_19**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_20**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_21**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_GPS_22**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_23**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_23** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_24**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_24.1**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_24.2**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_24** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_CODE_25**: $.context.location.country.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_25** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_CODE_26**: $.context.location.city.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_26** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_27**: $.context.domain must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_27** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_28**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_28** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_29**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_29** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_30**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_30** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_31**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_31** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_32**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_32** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_33**: $.context.action must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_33** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_34**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_34** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_35**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_35** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_36**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_36** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_37**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_37** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_38**: $.message.catalog.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_38** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_39**: $.message.catalog.providers[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_39** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_44**: $.message.catalog.providers[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_44** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_45**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_45** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_46**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_46** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_47**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_47** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_48**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_48** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_GPS_49**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_49** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_50**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_50** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_51**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_51.1**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_51.2**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_51** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_CODE_1**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_2**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_3**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_4**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.catalog.providers[*].items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_1**: every element of $.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_TICKET_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_1_TRIP_DETAILS**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_2**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_3**: every element of $.message.catalog.providers[*].tags[*].descriptor.code must be in ["SCHEDULED_INFO"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_3_SCHEDULED_INFO**: every element of $.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')].list[*].descriptor.code must be in ["GTFS"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_select"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_16**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_16.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_16.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_17**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_18**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COUNT_19**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_20**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_LABEL_21**: $.message.order.items[*].time.label must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_LABEL_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_DURATION_22**: $.message.order.items[*].time.duration must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_DURATION_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_23**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_23** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_24**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_24** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_25**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_25** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_26**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_26.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_26.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_26** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_27**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_27** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_28**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_28** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_GPS_29**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_29** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_30** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_31**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_31.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_31.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_31** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_32**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_32** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_33**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_33** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TITLE_34**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TITLE_34.1**: $.message.order.quote.breakup[*].title must be present in the payload
	  - **condition REQUIRED_MESSAGE_TITLE_34.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_34** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_35**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_35** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_36**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_36** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_37**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_37** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_CODE_38**: $.context.location.country.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_38** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_CODE_39**: $.context.location.city.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_39** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_40**: $.context.domain must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_40** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_41**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_41** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_42**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_42** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_43**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_43** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_44**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_44** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_45**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_45** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_46**: $.context.action must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_46** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_47**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_47** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_48**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_48** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_49**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_49** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_50**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_50** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_51**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_51** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CODE_52**: $.message.order.items[*].descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_52** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_53**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_53** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_54**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_54** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_55**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_55** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_56**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_56** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_60**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_60** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_61**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_61** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_64**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_64** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_65**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_65** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_66**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_66** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_67**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_67** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_GPS_68**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_68** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_69**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_69** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_70**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_70** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_71**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_71** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TITLE_72**: $.message.order.quote.breakup[*].title must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_72** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_73**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_73** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_74**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_74** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_75**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_75** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_76**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_76** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_TYPE_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_2**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_3**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_init"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_15**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_16**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_16.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_16.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_17**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_18**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COUNT_19**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_20**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_LABEL_21**: $.message.order.items[*].time.label must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_LABEL_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_DURATION_22**: $.message.order.items[*].time.duration must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_DURATION_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_23**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_23** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_24**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_24** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_25**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_25** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_26**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_26.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_26.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_26** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_27**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_27** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_28**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_28** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_GPS_29**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_29** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_30** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_31**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_31.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_31.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_31** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_32**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_32** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_33**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_33** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TITLE_34**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TITLE_34.1**: $.message.order.quote.breakup[*].title must be present in the payload
	  - **condition REQUIRED_MESSAGE_TITLE_34.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_34** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_35**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_35** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_36**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_36** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_37**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_37** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_38**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_38** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_39**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_39.1**: $.message.order.payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_39.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_39** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_STATUS_40**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS_40.1**: $.message.order.payments[*].status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS_40.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_40** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_41**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_41.1**: $.message.order.payments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_41.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_41** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_CODE_42**: $.context.location.country.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_42** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_CODE_43**: $.context.location.city.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_43** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_44**: $.context.domain must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_44** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_45**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_45** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_46**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_46** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_47**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_47** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_48**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_48** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_49**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_49** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_50**: $.context.action must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_50** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_51**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_51** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_52**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_52** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_53**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_53** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_54**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_54** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_55**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_55** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CODE_56**: $.message.order.items[*].descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_56** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_57**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_57** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_58**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_58** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_59**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_59** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_63**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_63** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_64**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_64** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_65**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_65** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_68**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_68** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_69**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_69** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_70**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_70** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_71**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_71** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_GPS_72**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_72** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_73**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_73** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_74**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_74** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_75**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_75** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TITLE_76**: $.message.order.quote.breakup[*].title must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_76** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_77**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_77** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_78**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_78** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_79**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_79** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_80**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_80** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_81**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_81** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_82**: $.message.order.payments[*].collected_by must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_82** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_83**: $.message.order.payments[*].status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_83** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_84**: $.message.order.payments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_84** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_CODE_85**: $.message.order.payments[*].params.bank_code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_CODE_85** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_86**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_86** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_TYPE_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_2**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_confirm"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_16**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_17**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_17.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_17.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_18**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_19**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COUNT_20**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_21**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_LABEL_22**: $.message.order.items[*].time.label must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_LABEL_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_DURATION_23**: $.message.order.items[*].time.duration must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_DURATION_23** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_24**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_24** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_25**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_25** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_26**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_26** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_27**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_27.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_27.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_27** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_28**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_28** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_29**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_29** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_GPS_30**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_30** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_31**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_31.1**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_31.2**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_31** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TOKEN_32**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TOKEN_32** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALID_TO_33**: $.message.order.fulfillments[*].stops[*].authorization.valid_to must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALID_TO_33** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_34**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_34** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_35**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_35.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_35.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_35** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_36**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_36** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_37**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_37** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TITLE_38**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TITLE_38.1**: $.message.order.quote.breakup[*].title must be present in the payload
	  - **condition REQUIRED_MESSAGE_TITLE_38.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_38** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_39**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_39** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_40**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_40** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_41**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_41** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_42**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_42** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_43**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_43.1**: $.message.order.payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_43.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_43** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_STATUS_44**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS_44.1**: $.message.order.payments[*].status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS_44.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_44** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_45**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_45.1**: $.message.order.payments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_45.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_45** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_46**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TRANSACTION_ID_46** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_47**: $.message.order.payments[*].params.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_47** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_AMOUNT_48**: $.message.order.payments[*].params.amount must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_AMOUNT_48** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_CODE_50**: $.context.location.country.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_50** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_CODE_51**: $.context.location.city.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_51** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_52**: $.context.domain must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_52** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_53**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_53** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_54**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_54** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_55**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_55** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_56**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_56** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_57**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_57** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_58**: $.context.action must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_58** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_59**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_59** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_60**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_60** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_61**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_61** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_62**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_62** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_63**: $.message.order.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_63** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_64**: $.message.order.status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_64** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_65**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_65** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_66**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_66** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CODE_67**: $.message.order.items[*].descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_67** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_68**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_68** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_69**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_69** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_70**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_70** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_71**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_71** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_75**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_75** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_76**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_76** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_79**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_79** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_80**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_80** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_81**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_81** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_82**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_82** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_GPS_83**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_83** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_84**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_84** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_85**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_85** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_86**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_86** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TITLE_87**: $.message.order.quote.breakup[*].title must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_87** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_88**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_88** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_89**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_89** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_90**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_90** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_91**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_91** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_92**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_92** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_93**: $.message.order.payments[*].collected_by must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_93** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_94**: $.message.order.payments[*].status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_94** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_95**: $.message.order.payments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_95** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_96**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TRANSACTION_ID_96** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_97**: $.message.order.payments[*].params.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_97** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_AMOUNT_98**: $.message.order.payments[*].params.amount must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_AMOUNT_98** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_CODE_99**: $.message.order.payments[*].params.bank_code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_CODE_99** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_100**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_100** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_103**: $.message.order.created_at must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CREATED_AT_103** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_104**: $.message.order.updated_at must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_UPDATED_AT_104** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_STATUS_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_cancel"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_15**: $.message.order.status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_17**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CODE_18**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_18.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_18.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_19**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_20**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_21**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_22**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_26**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_26** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_27**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_27** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_URL_28**: $.message.order.provider.descriptor.images[*].url must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_URL_28** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_31**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_31** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_32**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_32.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_32.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_32** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_33**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_33** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_34**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_34** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_GPS_35**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_35** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_36**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_36.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_36.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_36** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_37**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_37** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_38**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_38** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TITLE_39**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TITLE_39.1**: $.message.order.quote.breakup[*].title must be present in the payload
	  - **condition REQUIRED_MESSAGE_TITLE_39.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_39** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_40**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_40** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_41**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_41.1**: $.message.order.payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_41.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_41** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_42**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS_42.1**: $.message.order.payments[*].status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS_42.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_42** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_43**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_43.1**: $.message.order.payments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_43.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_43** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_CODE_44**: $.message.order.payments[*].params.bank_code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_CODE_44** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_45**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_45** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_TYPE_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_2**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_cancel"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_16**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_17**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_17.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_17.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_18**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_19**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_20**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_21**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LABEL_22**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION_23**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_24**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_25**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_26**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_27**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_27.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_27.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
	- **condition REQUIRED_MESSAGE_NAME_28**: $.message.order.fulfillments[*].stops[*].instructions.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_29**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_30**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_31**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_32**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_32.1**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_32.2**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
	- **condition REQUIRED_MESSAGE_TOKEN_33**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALID_TO_34**: $.message.order.fulfillments[*].stops[*].authorization.valid_to must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_35**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_36**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_36.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_36.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_37**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_38**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TITLE_39**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TITLE_39.1**: $.message.order.quote.breakup[*].title must be present in the payload
	  - **condition REQUIRED_MESSAGE_TITLE_39.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
	- **condition REQUIRED_MESSAGE_ID_40**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_41**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_42**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_43**: $.message.order.payments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_44**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_44.1**: $.message.order.payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_44.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition REQUIRED_MESSAGE_STATUS_45**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS_45.1**: $.message.order.payments[*].status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS_45.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition REQUIRED_MESSAGE_TYPE_46**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_46.1**: $.message.order.payments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_46.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_47**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_48**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT_49**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION_50**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_CODE_1**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_CODE_1.1**: $.context.location.country.code must be present in the payload
	  - **condition REQUIRED_CONTEXT_CODE_1.2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_3**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN_3.2**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_4**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_5**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_6**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_7**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_VERSION_8**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_ACTION_9**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_ACTION_9.1**: $.context.action must be present in the payload
	  - **condition REQUIRED_CONTEXT_ACTION_9.2**: every element of $.context.action must be in ["on_status"]
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_10**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_TTL_11**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_12**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_13**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_STATUS_15**: $.message.order.status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_17**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_18**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE_18.1**: $.message.order.items[*].descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE_18.2**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_18** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_19**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_19** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_20**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_20** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COUNT_21**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_21** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_22**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_22** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_LABEL_23**: $.message.order.items[*].time.label must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_LABEL_23** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_DURATION_24**: $.message.order.items[*].time.duration must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_DURATION_24** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_25**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_25** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_26**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_26** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_27**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_27** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_28**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_28.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_28.2**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_28** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_29**: $.message.order.fulfillments[*].stops[*].instructions.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_29** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_NAME_30**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_30** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CODE_31**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_31** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_GPS_32**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_32** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_33**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_33** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_34**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_34** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_35**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_35** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TITLE_36**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TITLE_36.1**: $.message.order.quote.breakup[*].title must be present in the payload
	  - **condition REQUIRED_MESSAGE_TITLE_36.2**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_36** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_37**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_37** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_38**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_38** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_VALUE_39**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_39** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_ID_40**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_40** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_41**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_41.1**: $.message.order.payments[*].collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_41.2**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_41** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_STATUS_42**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS_42.1**: $.message.order.payments[*].status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS_42.2**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_42** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TYPE_43**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_43.1**: $.message.order.payments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_43.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_43** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_44**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TRANSACTION_ID_44** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_45**: $.message.order.payments[*].params.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_45** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_MESSAGE_AMOUNT_46**: $.message.order.payments[*].params.amount must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_AMOUNT_46** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["METRO"]
	
	- **condition REQUIRED_CONTEXT_CODE_48**: $.context.location.country.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_48** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_CODE_49**: $.context.location.city.code must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_CODE_49** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_DOMAIN_50**: $.context.domain must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_DOMAIN_50** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP_51**: $.context.timestamp must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TIMESTAMP_51** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_ID_52**: $.context.bap_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_ID_52** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID_53**: $.context.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TRANSACTION_ID_53** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID_54**: $.context.message_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_MESSAGE_ID_54** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_VERSION_55**: $.context.version must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_VERSION_55** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_ACTION_56**: $.context.action must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_ACTION_56** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BAP_URI_57**: $.context.bap_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BAP_URI_57** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_TTL_58**: $.context.ttl must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_TTL_58** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_ID_59**: $.context.bpp_id must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_ID_59** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_CONTEXT_BPP_URI_60**: $.context.bpp_uri must be present in the payload
	
		> Note: **Condition REQUIRED_CONTEXT_BPP_URI_60** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_61**: $.message.order.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_61** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_62**: $.message.order.status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_62** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_63**: $.message.order.items[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_63** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_64**: $.message.order.items[*].descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_64** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CODE_65**: $.message.order.items[*].descriptor.code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CODE_65** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_66**: $.message.order.items[*].price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_66** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_67**: $.message.order.items[*].price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_67** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_68**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_68** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_IDS_69**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_FULFILLMENT_IDS_69** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_73**: $.message.order.provider.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_73** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_NAME_74**: $.message.order.provider.descriptor.name must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_NAME_74** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_URL_75**: $.message.order.provider.descriptor.images[*].url must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_URL_75** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_78**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_78** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_79**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_79** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_80**: $.message.order.fulfillments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_80** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_81**: $.message.order.fulfillments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_81** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_GPS_82**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_GPS_82** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CATEGORY_83**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CATEGORY_83.1**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	  - **condition REQUIRED_MESSAGE_CATEGORY_83.2**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition REQUIRED_MESSAGE_CATEGORY_83** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_84**: $.message.order.quote.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_84** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_85**: $.message.order.quote.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_85** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TITLE_86**: $.message.order.quote.breakup[*].title must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TITLE_86** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_87**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_87** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_88**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_88** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_VALUE_89**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_VALUE_89** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COUNT_90**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COUNT_90** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_ID_91**: $.message.order.payments[*].id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_ID_91** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_92**: $.message.order.payments[*].collected_by must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_COLLECTED_BY_92** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_STATUS_93**: $.message.order.payments[*].status must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_STATUS_93** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TYPE_94**: $.message.order.payments[*].type must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TYPE_94** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID_95**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_TRANSACTION_ID_95** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_96**: $.message.order.payments[*].params.currency must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CURRENCY_96** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_AMOUNT_97**: $.message.order.payments[*].params.amount must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_AMOUNT_97** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_CODE_98**: $.message.order.payments[*].params.bank_code must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_CODE_98** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_99**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_BANK_ACCOUNT_NUMBER_99** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_102**: $.message.order.created_at must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_CREATED_AT_102** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_103**: $.message.order.updated_at must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_UPDATED_AT_103** can be skipped if the following conditions are met:
		>
		> - **condition B**: every element of $.message.order.fulfillments[*].vehicle.category must **not** be in ["BUS"]
	
	- **condition VALID_ENUM_MESSAGE_TYPE_1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_2**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION", "OPERATIONAL_START_TIME", "OPERATIONAL_END_TIME"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]