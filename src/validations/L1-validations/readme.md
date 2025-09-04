

- **search** : All the following sub conditions must pass as per the api requirement

	- **SEARCH_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["search"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["search"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **SEARCH_INTENT** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CATEGORY_CODE**: $.message.intent.category.descriptor.code must be present in the payload
		
		- **condition VALID_ENUM_CATEGORY_CODE**: every element of $.message.intent.category.descriptor.code must be in ["CULTURE_HERITAGE"]
	
	- **SEARCH_FULFILMENT** : All the following sub conditions must pass as per the api requirement
	
		- **FULFILMENT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_FULFILMENT_CATEGORY**: $.message.intent.fulfillment.vehicle.category must be present in the payload
		
		- **FULFILMENT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_ENUM_CATEGORY**: every element of $.message.intent.fulfillment.vehicle.category must be in ["SITE"]
		
		- **REQUIRED_STOPS_START** : All the following sub conditions must pass as per the api requirement
		
			- **REQUIRED_STOPS_TYPE** : All the following sub conditions must pass as per the api requirement
			
				- **condition REQUIRED_FULFILMENT_STOP_TYPE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload
				
				- **condition REQUIRED_FULFILMENT_LOCATION_CODE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload
				
				- **condition REQUIRED_FULFILMENT_START_RANGE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload
				
				- **condition REQUIRED_FULFILMENT_END_RANGE**: $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be present in the payload
			
			- **ENUMS_STOPS** : All the following sub conditions must pass as per the api requirement
			
				- **condition ENUM_STOP_TYPE**: every element of $._EXTERNAL._SELF.message.intent.fulfillment.stops[*].type must be in ["START"]
				
				- **condition REGEX_FULFILMENT_LOCATION_CODE**: all elements of $.message.intent.fulfillment.stops[*].location.city.code must follow every regex in ["^std:\\d{3,5}$"]
				
					> Note: **Condition REGEX_FULFILMENT_LOCATION_CODE** can be skipped if the following conditions are met:
					>
					> - **condition B**: $.message.intent.fulfillment.stops[*].location.city.code must **not** be present in the payload
				
				- **condition REGEX_FULFILMENT_START_RANGE**: all elements of $.message.intent.fulfillment.stops[*].time.range.start must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
				
					> Note: **Condition REGEX_FULFILMENT_START_RANGE** can be skipped if the following conditions are met:
					>
					> - **condition B**: $.message.intent.fulfillment.stops[*].time.range.start must **not** be present in the payload
				
				- **condition REGEX_FULFILMENT_END_RANGE**: all elements of $.message.intent.fulfillment.stops[*].time.range.end must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
				
					> Note: **Condition REGEX_FULFILMENT_END_RANGE** can be skipped if the following conditions are met:
					>
					> - **condition B**: $.message.intent.fulfillment.stops[*].time.range.end must **not** be present in the payload
	
	- **SEARCH_PAYMENT** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_PAYMENT_COLLECTED_BY**: $.message.intent.payment.collected_by must be present in the payload
		
		- **condition ENUM_PAYMENT_COLLECTED_BY**: at least one element of $.message.intent.payment.collected_by must be in ["BPP", "BAP"]
	
	- **SEARCH_INTENT_TAGS** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.intent.tags[*].descriptor.code must be in ["BAP_TERMS", "INCREMENTAL_PULL"]
		
		- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_TYPE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload
		
		- **condition PAYMENT_TAG_INCREMENTAL_PULL**: every element of $.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')].list[*].descriptor.code must be in ["REGISTER"]
		
			> Note: **Condition PAYMENT_TAG_INCREMENTAL_PULL** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.intent.tags[?(@.descriptor.code=='INCREMENTAL_PULL')].list[*].descriptor.code must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **ON_SEARCH_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_search"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_search"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **ON_SEARCH_CATALOG** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_MESSAGE_CATALOG_NAME**: $.message.catalog.descriptor.name must be present in the payload
	
	- **ON_SEARCH_PROVIDERS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_MESSAGE_PROVIDERS_ID**: $.message.catalog.providers[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_DESCRIPTOR**: $.message.catalog.providers[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY_ID**: $.message.catalog.providers[*].categories[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY**: $.message.catalog.providers[*].categories[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload
		
			> Note: **Condition REQUIRED_MESSAGE_PROVIDERS_CATRGORY_CODE** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].categories[*].parent_category_id must be present in the payload
		
		- **condition ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["CULTURE_HERITAGE"]
		
			> Note: **Condition ENUM_MESSAGE_PROVIDERS_CATRGORY_CODE** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].categories[*].parent_category_id must be present in the payload
		
		- **condition CHECK_CATEGORY_ID_PARENT_ID**: $.message.catalog.providers[*].categories[*].parent_category_id must be present in the payload
		
			> Note: **Condition CHECK_CATEGORY_ID_PARENT_ID** can be skipped if the following conditions are met:
			>
			> - **condition B**: all of the following sub conditions must**not** be met:
			>
			>   - **condition B.1**: $.message.catalog.providers[*].categories[*].descriptor.code must **not** be present in the payload
			>   - **condition B.2**: $.message.catalog.providers[*].categories[*].id must **not** be equal to $.message.catalog.providers[*].categories[*].parent_category_id
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_START_RANGE**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_MESSAGE_PROVIDERS_START_RANGE.1**: $.message.catalog.providers[*].time.range.start must be present in the payload
		  - **condition REQUIRED_MESSAGE_PROVIDERS_START_RANGE.2**: all elements of $.message.catalog.providers[*].time.range.start must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_END_RANGE**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_MESSAGE_PROVIDERS_END_RANGE.1**: $.message.catalog.providers[*].time.range.end must be present in the payload
		  - **condition REQUIRED_MESSAGE_PROVIDERS_END_RANGE.2**: all elements of $.message.catalog.providers[*].time.range.end must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.catalog.providers[*].locations[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.catalog.providers[*].locations[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.catalog.providers[*].locations[*].descriptor.short_desc must be present in the payload
	
	- **ON_SEARCH_ITEMS_PAGE_1** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_ID**: $.message.catalog.providers[*].items[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_NAME**: $.message.catalog.providers[*].items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CODE**: $.message.catalog.providers[*].items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_LOCATIONS**: $.message.catalog.providers[*].items[*].location_ids[*] must be present in the payload
			
			- **condition VALID_MESSAGE_PROVIDERS_ITEMS_LOCATIONS_1**: every element of $.message.catalog.providers[*].items[*].location_ids[*] must be in $.message.catalog.providers[*].locations[*].id
			
			- **condition VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: every element of $.message.catalog.providers[*].items[*].category_ids[*] must be in $.message.catalog.providers[*].categories[*].id
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_1**: $.message.catalog.providers[*].items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.catalog.providers[*].items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition VALID_MESSAGE_PROVIDERS_ITEMS_CATEGORIES_2**: every element of $.message.catalog.providers[*].items[*].fulfillment_ids[*] must be in $.message.catalog.providers[*].fulfillments[*].id
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.catalog.providers[*].items[*].descriptor.images[*].url must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_PROVIDERS_ITEMS_CODE**: every element of $.message.catalog.providers[*].items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: all elements of $.message.catalog.providers[*].items[*].descriptor.images[*].url must follow every regex in ["^https:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.catalog.providers[*].items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.catalog.providers[*].items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.catalog.providers[*].items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_VAL**: $.message.catalog.providers[*].items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_PRICE_CURRENCY**: $.message.catalog.providers[*].items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MAX**: $.message.catalog.providers[*].items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_QUANTITY_MIN**: $.message.catalog.providers[*].items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.catalog.tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')]._EXTERNAL._SELF.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_SEARCH_FULLFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_ID**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE**: $.message.catalog.providers[*].fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
		
		- **ENUM_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["VISIT"]
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_STOPS_TYPE**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_CATEGORY**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["VISIT"]
	
	- **ON_SEARCH_TAGS** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.catalog.tags[*].descriptor.code must be in ["BPP_TERMS", "PAGINATION"]
		
		- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_TYPE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload
		
		- **condition REQUIRED_PAYMENT_TAG_PAGINATION**: every element of $.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["PAGINATION_ID", "CURRENT_PAGE_NUMBER", "MAX_PAGE_NUMBER"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_PAGINATION** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must **not** be present in the payload

- **select** : All the following sub conditions must pass as per the api requirement

	- **SELECT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["select"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["select"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **SELECT_ITEM_SELECT_0** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_ITEM**: $.message.order.items[*].id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_PARENT**: $.message.order.items[*].parent_item_id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_QUANTITY**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **SELECT_ITEM_SELECT_1** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_ITEM**: $.message.order.items[*].id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_PARENT**: $.message.order.items[*].parent_item_id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_QUANTITY**: $.message.order.items[*].quantity.selected.count must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM**: $.message.order.items[*].xinput.form.id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE**: $.message.order.items[*].xinput.form_response.status must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION**: $.message.order.items[*].xinput.form_response.submission_id must be present in the payload
	
	- **SELECT_FULLFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload
		
		- **ENUM_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
	
	- **SELECT_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **ON_SELECT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_select"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_select"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **ON_SELECT_ITEMS_PAGE_0** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
			
			- **condition REQUIRED_ITEMS_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_ITEMS_CODE**: $.message.order.items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_ITEMS_LOCATIONS**: $.message.order.items[*].location_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_CATEGORIES**: $.message.order.items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_FULFILMENTS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_IMAGES_URL**: $.message.order.items[*].descriptor.images[*].url must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_NAME**: $.message.order.items[*].xinput.head.descriptor.name must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MIN**: $.message.order.items[*].xinput.head.index.min must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_CUR**: $.message.order.items[*].xinput.head.index.cur must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_INDEX_MAX**: $.message.order.items[*].xinput.head.index.max must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_HEADINGS**: $.message.order.items[*].xinput.head.headings[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_FORM**: $.message.order.items[*].xinput.form.id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_FORM_MIME**: $.message.order.items[*].xinput.form.mime_type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_URL**: $.message.order.items[*].xinput.form.url must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_RESUBMIT**: $.message.order.items[*].xinput.form.resubmit must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_MULTIPLE_SUMBISSIONS**: $.message.order.items[*].xinput.form.multiple_sumbissions must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_ITEMS_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_ITEMS_IMAGES_URL**: all elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\\/\\/[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.order.items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_VAL**: $.message.order.items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**: $.message.order.items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**: $.message.order.items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_SELECT_ITEMS_PAGE_1** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
			
			- **condition REQUIRED_ITEMS_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_ITEMS_CODE**: $.message.order.items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_ITEMS_LOCATIONS**: $.message.order.items[*].location_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: $.message.order.items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.order.items[*].descriptor.images[*].url must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_XINPUT_FORM**: $.message.order.items[*].xinput.form.id must be present in the payload
			
			- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE**: $.message.order.items[*].xinput.form_response.status must be present in the payload
			
			- **condition REQUIRED_ORDER_ITEM_XINPUT_FORM_RESPONSE_SUBMISSION**: $.message.order.items[*].xinput.form_response.submission_id must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_ITEMS_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_ITEMS_IMAGES_URL**: all elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.order.items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_VAL**: $.message.order.items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**: $.message.order.items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**: $.message.order.items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_SELECT_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_TYPE**: $.message.order.fulfillments[*].type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **ENUM_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["VISIT"]
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["SITE"]
	
	- **ON_SELECT_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES**: $.message.order.provider.descriptor.images[*].url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.order.provider.locations[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS**: $.message.order.provider.locations[*].gps must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.order.provider.locations[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.order.provider.locations[*].descriptor.short_desc must be present in the payload
	
	- **ON_SELECT_CANCELLATION_TERMS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.cancellation_terms[*].cancellation_eligible must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.url must **not** be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.mimetype must **not** be present in the payload
	
	- **ON_SELECT_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_QUOTE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
			
			- **condition REQUIRED_QUOTE_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_VALUE** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
		
		- **ENUM_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_QUOTE_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **INIT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["init"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["init"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **INIT_ITEM** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_ITEM**: $.message.order.items[*].id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_PARENT**: $.message.order.items[*].parent_item_id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_QUANTITY**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **INIT_FULLFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload
		
		- **ENUM_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
	
	- **INIT_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
	
	- **INIT_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
		
			> Note: **Condition REQUIRED_PAYMENTS_ID** can be skipped if the following conditions are met:
			>
			> - **condition B**: ["BPP"] must be equal to $.message.order.payments[*].collected_by
		
		- **condition REQUIRED_PAYMENTS_COLLECTOR**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_PAYMENTS_COLLECTOR.1**: $.message.order.payments[*].collected_by must be present in the payload
		  - **condition REQUIRED_PAYMENTS_COLLECTOR.2**: every element of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]
		
		- **condition REQUIRED_PAYMENTS_STATUS**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_PAYMENTS_STATUS.1**: $.message.order.payments[*].status must be present in the payload
		  - **condition REQUIRED_PAYMENTS_STATUS.2**: every element of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
		
		- **condition REQUIRED_PAYMENTS_TYPE**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_PAYMENTS_TYPE.1**: $.message.order.payments[*].type must be present in the payload
		  - **condition REQUIRED_PAYMENTS_TYPE.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER"]
	
	- **INIT_PAYMENTS_TAG** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS"]
		
		- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **ONINIT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_init"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_init"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **ON_INIT_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
			
			- **condition REQUIRED_ITEMS_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_ITEMS_CODE**: $.message.order.items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_ITEMS_LOCATIONS**: $.message.order.items[*].location_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: $.message.order.items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.order.items[*].descriptor.images[*].url must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_ITEMS_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_ITEMS_IMAGES_URL**: all elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.order.items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_VAL**: $.message.order.items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**: $.message.order.items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**: $.message.order.items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_INIT_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_TYPE**: $.message.order.fulfillments[*].type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **ENUM_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_PROVIDERS_FULFILLMENTS_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["VISIT"]
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_MESSAGE_FULFILLMENTS_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["SITE"]
	
	- **ON_INIT_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES**: $.message.order.provider.descriptor.images[*].url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.order.provider.locations[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS**: $.message.order.provider.locations[*].gps must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.order.provider.locations[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.order.provider.locations[*].descriptor.short_desc must be present in the payload
	
	- **ON_INIT_CANCELLATION_TERMS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.cancellation_terms[*].cancellation_eligible must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.url must **not** be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.mimetype must **not** be present in the payload
	
	- **ON_INIT_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_QUOTE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
			
			- **condition REQUIRED_QUOTE_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_VALUE** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
		
		- **ENUM_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_QUOTE_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]
	
	- **ON_INIT_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
		
			> Note: **Condition REQUIRED_PAYMENTS_ID** can be skipped if the following conditions are met:
			>
			> - **condition B**: ["BPP"] must be equal to $.message.order.payments[*].collected_by
		
		- **condition REQUIRED_PAYMENTS_COLLECTOR**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_PAYMENTS_COLLECTOR.1**: $.message.order.payments[*].collected_by must be present in the payload
		  - **condition REQUIRED_PAYMENTS_COLLECTOR.2**: every element of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]
		
		- **condition REQUIRED_PAYMENTS_STATUS**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_PAYMENTS_STATUS.1**: $.message.order.payments[*].status must be present in the payload
		  - **condition REQUIRED_PAYMENTS_STATUS.2**: every element of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
		
		- **condition REQUIRED_PAYMENTS_TYPE**: all of the following sub conditions must be met:
		
		  - **condition REQUIRED_PAYMENTS_TYPE.1**: $.message.order.payments[*].type must be present in the payload
		  - **condition REQUIRED_PAYMENTS_TYPE.2**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER"]
	
	- **ON_INIT_PAYMENTS_TAG** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.order.tags[*].descriptor.code must be in ["BPP_TERMS"]
		
		- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "SETTLEMENT_AMOUNT", "SETTLEMENT_TYPE", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["confirm"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["confirm"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **CONFIRM_ITEM** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_ITEM**: $.message.order.items[*].id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_PARENT**: $.message.order.items[*].parent_item_id must be present in the payload
		
		- **condition REQUIRED_ORDER_ITEM_QUANTITY**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **INIT_FULLFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload
		
		- **ENUM_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
	
	- **INIT_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
	
	- **CONFIRM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: $.message.order.payments[*].collected_by must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_STATUS**: $.message.order.payments[*].status must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_TYPE**: $.message.order.payments[*].type must be present in the payload
		
		- **ENUM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: every element of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]
			
			- **condition REQUIRED_PAYMENTS_STATUS**: every element of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
			
			- **condition REQUIRED_PAYMENTS_TYPE**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER"]
		
		- **REQUIRED_PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_TRANSACTION_ID**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_CURRENCY**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_AMOUNT**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **CONFIRM_PAYMENTS_TAG** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BPP_TERMS"]
		
		- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload
		
		- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "SETTLEMENT_AMOUNT", "SETTLEMENT_TYPE", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **ON_CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_confirm"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_confirm"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_ID**: $.message.order.id must be present in the payload
			
			- **condition REQUIRED_ORDER_STATUS**: $.message.order.status must be present in the payload
			
			- **condition REQUIRED_ON_CONFIRM_CREATED_AT**: $.message.order.created_at must be present in the payload
			
			- **condition REQUIRED_ON_CONFIRM_UPDATED_AT**: $.message.order.updated_at must be present in the payload
		
		- **VALID_ENUM_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_ENUM_ORDER_STATUS**: at least one element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETED", "CANCELLED"]
			
			- **condition REGEX_ON_CONFIRM_CREATED_AT**: all elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_ON_CONFIRM_UPDATED_AT**: all elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
	
	- **ON_CONFIRM_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
			
			- **condition REQUIRED_ITEMS_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_ITEMS_CODE**: $.message.order.items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_ITEMS_LOCATIONS**: $.message.order.items[*].location_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: $.message.order.items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.order.items[*].descriptor.images[*].url must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_ITEMS_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_ITEMS_IMAGES_URL**: all elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.order.items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_VAL**: $.message.order.items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**: $.message.order.items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**: $.message.order.items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_CONFIRM_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_STATE**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_AUTH**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_TOKEN**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_VALID_TO**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_AUTH_STATUS**: $.message.order.fulfillments[*].stops[*].authorization.status must be present in the payload
		
		- **ENUM_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REQUIRED_FULFILMENT_STATE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["CONFIRMED", "IN_PROGRESS", "COMPLETED"]
			
			- **condition REQUIRED_FULFILMENT_AUTH**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
			
			- **condition REQUIRED_FULFILMENT_AUTH_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
	- **ON_CONFIRM_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES**: $.message.order.provider.descriptor.images[*].url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.order.provider.locations[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS**: $.message.order.provider.locations[*].gps must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.order.provider.locations[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.order.provider.locations[*].descriptor.short_desc must be present in the payload
	
	- **ON_CONFIRM_CANCELLATION_TERMS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.cancellation_terms[*].cancellation_eligible must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.url must **not** be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.mimetype must **not** be present in the payload
	
	- **ON_CONFIRM_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_QUOTE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
			
			- **condition REQUIRED_QUOTE_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_VALUE** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
		
		- **ENUM_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_QUOTE_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]
	
	- **ON_CONFIRM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: $.message.order.payments[*].collected_by must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_STATUS**: $.message.order.payments[*].status must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_TYPE**: $.message.order.payments[*].type must be present in the payload
		
		- **ENUM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: every element of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]
			
			- **condition REQUIRED_PAYMENTS_STATUS**: every element of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
			
			- **condition REQUIRED_PAYMENTS_TYPE**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER"]
		
		- **REQUIRED_PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_TRANSACTION_ID**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_CURRENCY**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_AMOUNT**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **ON_CONFIRM_PAYMENTS_TAG** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BPP_TERMS"]
		
		- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload
		
		- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "SETTLEMENT_AMOUNT", "SETTLEMENT_TYPE", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["status"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["status"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **condition REQUIRED_ORDER_ID**: $.message.order_id must be present in the payload

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **ON_STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_status"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_status"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **ON_STATUS_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_ID**: $.message.order.id must be present in the payload
			
			- **condition REQUIRED_ORDER_STATUS**: $.message.order.status must be present in the payload
			
			- **condition REQUIRED_ON_CONFIRM_CREATED_AT**: $.message.order.created_at must be present in the payload
			
			- **condition REQUIRED_ON_CONFIRM_UPDATED_AT**: $.message.order.updated_at must be present in the payload
		
		- **VALID_ENUM_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_ENUM_ORDER_STATUS**: at least one element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETED", "CANCELLED"]
			
			- **condition REGEX_ON_CONFIRM_CREATED_AT**: all elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_ON_CONFIRM_UPDATED_AT**: all elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
	
	- **ON_STATUS_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
			
			- **condition REQUIRED_ITEMS_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_ITEMS_CODE**: $.message.order.items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_ITEMS_LOCATIONS**: $.message.order.items[*].location_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: $.message.order.items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.order.items[*].descriptor.images[*].url must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_ITEMS_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_ITEMS_IMAGES_URL**: all elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.order.items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_VAL**: $.message.order.items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**: $.message.order.items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**: $.message.order.items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_STATUS_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_STATE**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_AUTH**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_TOKEN**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_VALID_TO**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_AUTH_STATUS**: $.message.order.fulfillments[*].stops[*].authorization.status must be present in the payload
		
		- **ENUM_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REQUIRED_FULFILMENT_STATE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["COMPLETED", "IN_PROGRESS", "CONFIRMED"]
			
			- **condition REQUIRED_FULFILMENT_AUTH**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
			
			- **condition REQUIRED_FULFILMENT_AUTH_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["CLAIMED", "UNCLAIMED"]
	
	- **ON_STATUS_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES**: $.message.order.provider.descriptor.images[*].url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.order.provider.locations[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS**: $.message.order.provider.locations[*].gps must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.order.provider.locations[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.order.provider.locations[*].descriptor.short_desc must be present in the payload
	
	- **ON_STATUS_CANCELLATION_TERMS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.cancellation_terms[*].cancellation_eligible must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.url must **not** be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.mimetype must **not** be present in the payload
	
	- **ON_STATUS_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_QUOTE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
			
			- **condition REQUIRED_QUOTE_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_VALUE** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
		
		- **ENUM_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_QUOTE_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]
	
	- **ON_STATUS_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: $.message.order.payments[*].collected_by must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_STATUS**: $.message.order.payments[*].status must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_TYPE**: $.message.order.payments[*].type must be present in the payload
		
		- **ENUM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: every element of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]
			
			- **condition REQUIRED_PAYMENTS_STATUS**: every element of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
			
			- **condition REQUIRED_PAYMENTS_TYPE**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER"]
		
		- **REQUIRED_PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_TRANSACTION_ID**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_CURRENCY**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_AMOUNT**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **ON_STATUS_PAYMENTS_TAG** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BPP_TERMS"]
		
		- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload
		
		- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "SETTLEMENT_AMOUNT", "SETTLEMENT_TYPE", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **CANCEL_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["cancel"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["cancel"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **CANCEL_MESSAGE_1** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLATION_ID**: $.message.cancellation_reason_id must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_CODE**: $.message.descriptor.code must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_NAME**: $.message.descriptor.name must be present in the payload
		
		- **condition REQUIRED_ORDER_ID**: $.message.order_id must be present in the payload
		
		- **condition VALID_CANCELLATION_DESCRIPTOR_CODE**: at least one element of $.message.descriptor.code must be in ["SOFT_CANCEL", "CONFIRM_CANCEL"]
		
		- **condition VALID_CANCELLATION_REASON_ID**: at least one element of $.message.cancellation_reason_id must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **ON_CANCEL_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**: $.context.location.country.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_LOCATION_CITY_CODE**: $.context.location.city.code must be present in the payload
			
			- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
			
			- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_cancel"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
			
				> Note: **Condition REQUIRED_CONTEXT_BPP_URI** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["on_cancel"] must be equal to ["search"]
			
			- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
			
			- **condition REQUIRED_CONTEXT_VERSION**: $.context.version must be present in the payload
			
			- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_CONTEXT_LOCATION_COUNTRY_CODE**: at least one element of $.context.location.country.code must be in ["IND"]
			
			- **condition VALID_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:TRV14"]
		
		- **CONTEXT_REGEX** : All the following sub conditions must pass as per the api requirement
		
			- **condition REGEX_CONTEXT_LOCATION_CITY_CODE**: all elements of $.context.location.city.code must follow every regex in ["^std:\\d{3,5}$"]
			
			- **condition REGEX_CONTEXT_TIMESTAMP**: all elements of $.context.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_CONTEXT_BAP_URI**: all elements of $.context.bap_uri must follow every regex in ["^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/[a-zA-Z0-9\-\/]*\/?$"]
			
			- **condition REQUIRED_CONTEXT_TTL**: all elements of $.context.ttl must follow every regex in ["^P(?=\\d|T\\d)(\\d+Y)?(\\d+M)?(\\d+D)?(T(\\d+H)?(\\d+M)?(\\d+S)?)?$"]
	
	- **ON_CANCEL_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_ID**: $.message.order.id must be present in the payload
			
			- **condition REQUIRED_ORDER_STATUS**: $.message.order.status must be present in the payload
			
			- **condition REQUIRED_ON_CONFIRM_CREATED_AT**: $.message.order.created_at must be present in the payload
			
			- **condition REQUIRED_ON_CONFIRM_UPDATED_AT**: $.message.order.updated_at must be present in the payload
		
		- **VALID_ENUM_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			- **condition VALID_ENUM_ORDER_STATUS**: at least one element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETED", "CANCELLED"]
			
			- **condition REGEX_ON_CONFIRM_CREATED_AT**: all elements of $.message.order.created_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REGEX_ON_CONFIRM_UPDATED_AT**: all elements of $.message.order.updated_at must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
	
	- **ON_CANCEL_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_MESSAGE_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
			
			- **condition REQUIRED_ITEMS_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
			
			- **condition REQUIRED_ITEMS_CODE**: $.message.order.items[*].descriptor.code must be present in the payload
			
			- **condition REQUIRED_ITEMS_LOCATIONS**: $.message.order.items[*].location_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_CATEGORIES**: $.message.order.items[*].category_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_FULFILMENTS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
			
			- **condition REQUIRED_MESSAGE_PROVIDERS_ITEMS_IMAGES_URL**: $.message.order.items[*].descriptor.images[*].url must be present in the payload
		
		- **ENUM_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_MESSAGE_ITEMS_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["ABSTRACT", "ENTRY_PASS", "ADD_ON"]
		
		- **condition REGEX_MESSAGE_ITEMS_IMAGES_URL**: all elements of $.message.order.items[*].descriptor.images[*].url must follow every regex in ["^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$"]
		
		- **ABSTRACT_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.items[*].cancellation_terms[*].cancellation_eligible must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_MIME**: $.message.order.items[*].replacement_terms[*].external_ref.mimetype must be present in the payload
			
			- **condition REQUIRED_REPLACEMENT_TERMS_ELIGIBLE_URL**: $.message.order.items[*].replacement_terms[*].external_ref.url must be present in the payload
			
			- **condition REGEX_REPLACEMENT_TERMS_ELIGIBLE_URL**: all elements of $.message.order.items[*].replacement_terms[*].external_ref.url must follow every regex in ["^https?:\\/\\/[a-zA-Z0-9.-]+(?:\\.[a-zA-Z]{2,})?(:\\d+)?(\\/[^\\s?#]*)?(\\?[^\\s#]*)?(#[^\\s]*)?$"]
		
		- **CHILD_ITEM_CODE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PARENT_ITEM_ID**: $.message.order.items[*].parent_item_id must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_VAL**: $.message.order.items[*].price.value must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MAX**: $.message.order.items[*].quantity.maximum.count must be present in the payload
			
			- **condition REQUIRED_MESSAGE_ITEMS_QUANTITY_MIN**: $.message.order.items[*].quantity.minimum.count must be present in the payload
			
			- **condition ITEM_TAGS**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
			
			- **condition REQUIRED_ITEM_TAG_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["MIN_AGE", "MAX_AGE", "GENDER", "NATIONALITY"]
			
				> Note: **Condition REQUIRED_ITEM_TAG_FARE_POLICY** can be skipped if the following conditions are met:
				>
				> - **condition B**: $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_CANCEL_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_ID**: $.message.order.fulfillments[*].id must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: $.message.order.fulfillments[*].stops[*].type must be present in the payload
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: $.message.order.fulfillments[*].stops[*].time.timestamp must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_STATE**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_AUTH**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_TOKEN**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_VALID_TO**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
			
			- **condition REQUIRED_FULFILMENT_AUTH_STATUS**: $.message.order.fulfillments[*].stops[*].authorization.status must be present in the payload
		
		- **ENUM_FULFILLMENT** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_ORDER_FULFILLMENT_STOPS**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START"]
			
			- **condition REQUIRED_ORDER_FULFILLMENT_TIME**: all elements of $.message.order.fulfillments[*].stops[*].time.timestamp must follow every regex in ["^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\.\\d{3}Z$"]
			
			- **condition REQUIRED_FULFILMENT_STATE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["COMPLETED", "IN_PROGRESS", "CONFIRMED"]
			
			- **condition REQUIRED_FULFILMENT_AUTH**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
			
			- **condition REQUIRED_FULFILMENT_AUTH_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["CLAIMED", "UNCLAIMED"]
	
	- **ON_CANCEL_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_ORDER_PROVIDER**: $.message.order.provider.id must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition REQUIRED_ORDER_PROVIDER_DESCRIPTOR_IMAGES**: $.message.order.provider.descriptor.images[*].url must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_ID**: $.message.order.provider.locations[*].id must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_GPS**: $.message.order.provider.locations[*].gps must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_NAME**: $.message.order.provider.locations[*].descriptor.name must be present in the payload
		
		- **condition REQUIRED_MESSAGE_PROVIDERS_LOCATIONS_DESC**: $.message.order.provider.locations[*].descriptor.short_desc must be present in the payload
	
	- **ON_CANCEL_CANCELLATION_TERMS** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLATION_TERMS_ELIGIBLE**: $.message.order.cancellation_terms[*].cancellation_eligible must be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_URL** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.url must **not** be present in the payload
		
		- **condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
			> Note: **Condition REQUIRED_CANCELLATION_TERMS_EXTERNAL_MIME** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.cancellation_terms[*].external_ref.mimetype must **not** be present in the payload
	
	- **ON_CANCEL_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_QUOTE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
			
			- **condition REQUIRED_QUOTE_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_ID** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_CURRENCY** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
			
			- **condition REQUIRED_QUOTE_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
			
				> Note: **Condition REQUIRED_QUOTE_ITEM_PRICE_VALUE** can be skipped if the following conditions are met:
				>
				> - **condition B**: ["TAX"] must be equal to $.message.order.quote.breakup[*].title
		
		- **ENUM_QUOTE** : All the following sub conditions must pass as per the api requirement
		
			- **condition ENUM_QUOTE_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "TAX", "ADD_ONS", "REFUND", "CANCELLATION_CHARGES"]
	
	- **ON_CANCEL_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: $.message.order.payments[*].collected_by must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_STATUS**: $.message.order.payments[*].status must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_TYPE**: $.message.order.payments[*].type must be present in the payload
		
		- **ENUM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_COLLECTOR**: every element of $.message.order.payments[*].collected_by must be in ["BAP", "BPP"]
			
			- **condition REQUIRED_PAYMENTS_STATUS**: every element of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
			
			- **condition REQUIRED_PAYMENTS_TYPE**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER"]
		
		- **REQUIRED_PAYMENT_PARAMS** : All the following sub conditions must pass as per the api requirement
		
			- **condition REQUIRED_PAYMENTS_TRANSACTION_ID**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_CURRENCY**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
			
			- **condition REQUIRED_PAYMENTS_AMOUNT**: $._EXTERNAL._SELF.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **ON_CANCEL_PAYMENTS_TAG** : All the following sub conditions must pass as per the api requirement
	
		- **condition PAYMENT_TAG_GROUP**: every element of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BPP_TERMS"]
		
		- **condition REQUIRED_PAYMENT_TAG_BAP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "SETTLEMENT_BASIS", "SETTLEMENT_WINDOW"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BAP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must **not** be present in the payload
		
		- **condition REQUIRED_PAYMENT_TAG_BPP_TERMS**: every element of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "STATIC_TERMS", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "SETTLEMENT_AMOUNT", "SETTLEMENT_TYPE", "SETTLEMENT_BANK_CODE", "SETTLEMENT_BANK_ACCOUNT_NUMBER"]
		
			> Note: **Condition REQUIRED_PAYMENT_TAG_BPP_TERMS** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must **not** be present in the payload
	
	- **ON_CANCEL_CANCELLATION** : All the following sub conditions must pass as per the api requirement
	
		- **condition REQUIRED_CANCELLED_BY**: $.message.order.cancellation.cancelled_by must be present in the payload
		
		- **condition REQUIRED_REASON_BY**: $.message.order.cancellation.reason.descriptor.code must be present in the payload
		
		- **condition VALID_ENUM_REQUIRED_CANCELLED_BY**: at least one element of $.message.order.cancellation.cancelled_by must be in ["CONSUMER", "PROVIDER"]
		
		- **condition VALID_ENUM_CANCELLATION_REASON_ID**: at least one element of $.message.order.cancellation.reason.descriptor.code must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]