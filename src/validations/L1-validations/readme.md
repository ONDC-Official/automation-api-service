

- **search** : All the following sub conditions must pass as per the api requirement

	- **SEARCH_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_LOCATION_CITY_CODE**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_LOCATION_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:TRV13"]
	
	- **SEARCH_INTENT** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_CATEGORY_CODE**
		
		- $.message.intent.category.descriptor.code must be present in the payload
		
		#### **VALID_ENUM_CATEGORY_CODE**
		
		- All elements of $.message.intent.category.descriptor.code must be in ["HOTEL"]
	
	- **SEARCH_INTENT_TAGS** : All the following sub conditions must pass as per the api requirement
	
		#### **TAG_GROUPS_REQUIRED**
		
		- All elements of $.message.intent.tags[*].descriptor.code must be in ["BAP_TERMS", "BUYER_FINDER_FEES", "CATALOG_INC"]
		
		#### **TAG_BAP_TERMS**
		
		- All elements of $.message.intent.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be in ["STATIC_TERMS", "STATIC_TERMS_NEW", "EFFECTIVE_DATE"]
		
		#### **TAG_BUYER_FINDER_FEES**
		
		- All elements of $.message.intent.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE"]

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **ON_SEARCH_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **CONTEXT_REQUIRED** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_LOCATION_COUNTRY_CODE**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_LOCATION_CITY_CODE**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_ID**
			
			- $.context.bpp_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_URI**
			
			- $.context.bpp_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_LOCATION_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- All elements of $.context.domain must be in ["ONDC:TRV13"]
		
		#### **REQUIRED_CATALOG_NAME**
		
		- $.message.catalog.descriptor.name must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.catalog.descriptor.name is not in the payload
		
		#### **REQUIRED_CATALOG_CODE**
		
		- $.message.catalog.descriptor.code must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.catalog.descriptor.code is not in the payload
	
	- **PROVIDERS_REQUIRED** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.catalog.providers[*].id must be present in the payload
		
		#### **REQUIRED_PROVIDER_NAME**
		
		- $.message.catalog.providers[*].descriptor.name must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.catalog.providers[*].descriptor.name is not in the payload
		
		#### **REQUIRED_PROVIDER_IMAGES**
		
		- All elements of $.message.catalog.providers[*].descriptor.images[*].url must follow every regex in ["^https://.*"]
		
		> **Skip if:**
		>
		>     - $.message.catalog.providers[*].descriptor.images[*].url is not in the payload
		
		#### **REQUIRED_PROVIDER_LOCATIONS**
		
		- $.message.catalog.providers[*].locations[*].id must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.catalog.providers[*].locations[*].id is not in the payload
	
	- **PROVIDER_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		> **Skip if:**
		>
		>     - $.message.catalog.providers[*].payments[*].type is not in the payload
	
	- **PROVIDER_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_ITEM_ID**
		
		- $.message.catalog.providers[*].items[*].id must be present in the payload
		
		#### **REQUIRED_ITEM_LABEL**
		
		- $.message.catalog.providers[*].items[*].time.label must be present in the payload
		
		#### **REQUIRED_ITEM_TIMESTAMPS**
		
		- $.message.catalog.providers[*].items[*].time.timestamp must be present in the payload
		
		#### **REQUIRED_ITEM_NAME**
		
		- $.message.catalog.providers[*].items[*].descriptor.name must be present in the payload
		
		#### **REQUIRED_ITEM_CODE**
		
		- $.message.catalog.providers[*].items[*].descriptor.code must be present in the payload
		
		#### **REQUIRED_ITEM_IMAGES**
		
		- All elements of $.message.catalog.providers[*].items[*].descriptor.images[*].url must follow every regex in ["^https://.*"]
		
		> **Skip if:**
		>
		>     - $.message.catalog.providers[*].items[*].descriptor.images[*].url is not in the payload
		
		#### **REQUIRED_ITEM_PRICE**
		
		- $.message.catalog.providers[*].items[*].price.value must be present in the payload
		
		#### **REQUIRED_ITEM_PRICE_CURRENCY**
		
		- $.message.catalog.providers[*].items[*].price.currency must be present in the payload
		
		#### **REQUIRED_ITEM_PRICE_MAX_VALUE**
		
		- $.message.catalog.providers[*].items[*].price.maximum_value must be present in the payload
		
		#### **REQUIRED_ITEM_QUANTITY_AVAILABLE**
		
		- $.message.catalog.providers[*].items[*].quantity.available.count must be present in the payload
		
		#### **REQUIRED_ITEM_QUANTITY_MAXIMUM_COUNT**
		
		- $.message.catalog.providers[*].items[*].quantity.maximum.count must be present in the payload
		
		#### **REQUIRED_ITEM_LOCATION_LINK**
		
		- $.message.catalog.providers[*].items[*].location_ids[*] must be present in the payload
		
		#### **REQUIRED_ITEM_CATEGORY_LINK**
		
		- $.message.catalog.providers[*].items[*].category_ids[*] must be present in the payload
		
		#### **REQUIRED_ITEM_PAYMENT_LINK**
		
		- $.message.catalog.providers[*].items[*].payment_ids[*] must be present in the payload
	
	- **ITEM_ADDONS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_ADDON_ID**
		
		- $.message.catalog.providers[*].items[*].add_ons[*].id must be present in the payload
		
		#### **REQUIRED_ADDON_NAME**
		
		- $.message.catalog.providers[*].items[*].add_ons[*].descriptor.name must be present in the payload
		
		#### **REQUIRED_ADDON_PRICE**
		
		- $.message.catalog.providers[*].items[*].add_ons[*].price.value must be present in the payload
		
		#### **REQUIRED_ADDON_PRICE_CURRENCY**
		
		- $.message.catalog.providers[*].items[*].add_ons[*].price.currency must be present in the payload
		
		#### **REQUIRED_ADDON_PRICE_MAXIMUM_VALUE**
		
		- $.message.catalog.providers[*].items[*].add_ons[*].price.maximum_value must be present in the payload
		
		#### **REQUIRED_CANCELLATION_TERMS_URL**
		
		- All elements of $.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url must follow every regex in ["^https://.*"]
		
		> **Skip if:**
		>
		>     - $.message.catalog.providers[*].items[*].cancellation_terms[*].external_ref.url is not in the payload

- **select** : All the following sub conditions must pass as per the api requirement

	- **SELECT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_CONTEXT_FIELDS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_COUNTRY**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_CITY**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_URI**
			
			- $.context.bpp_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_ID**
			
			- $.context.bpp_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM_VALIDATION** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- At least one of $.context.domain must be in ["ONDC:TRV13"]
	
	- **SELECT_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
		
		#### **REQUIRED_PROVIDER_TIME_LABEL**
		
		- $.message.order.provider.time.label must be present in the payload
		
		#### **REQUIRED_PROVIDER_TIME_RANGE**
		
		- $.message.order.provider.time.range.start must be present in the payload
		
		#### **REQUIRED_PROVIDER_TIME_RANGE_END**
		
		- $.message.order.provider.time.range.end must be present in the payload
	
	- **SELECT_ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_ITEM_ID**
		
		- $.message.order.items[*].id must be present in the payload
		
		#### **REQUIRED_ITEM_LOCATION**
		
		- $.message.order.items[*].location_ids[*] must be present in the payload
		
		#### **REQUIRED_ITEM_QUANTITY_SELECTED**
		
		- $.message.order.items[*].quantity.selected.count must be present in the payload
		
		#### **REQUIRED_ITEM_ADDON_ID**
		
		- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **SELECT_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_TAGS**
		
		- $.message.order.fulfillments[*].tags[*].descriptor.code must be present in the payload
		
		#### **VALID_FULFILLMENT_TAG_GUESTS**
		
		- All elements of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["GUESTS"]
		
		#### **VALID_FULFILLMENT_SUBTAGS**
		
		- All elements of $.message.order.fulfillments[*].tags[*].list[*].descriptor.code must be in ["ADULTS", "CHILDREN"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **ON_SELECT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_CONTEXT_FIELDS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_COUNTRY**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_CITY**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_URI**
			
			- $.context.bpp_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_ID**
			
			- $.context.bpp_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM_VALIDATION** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- At least one of $.context.domain must be in ["ONDC:TRV13"]
	
	- **ON_SELECT_ORDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **ON_SELECT_ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_ITEM_ID**
		
		- $.message.order.items[*].id must be present in the payload
		
		#### **REQUIRED_ITEM_ADDS_ON_IDS**
		
		- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **ON_SELECT_ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_QUOTE_PRICE**
		
		- $.message.order.quote.price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_CURRENCY**
		
		- $.message.order.quote.price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP**
		
		- $.message.order.quote.breakup[*].price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**
		
		- $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_TITLE**
		
		- $.message.order.quote.breakup[*].title must be present in the payload
		
		#### **REQUIRED_QUOTE_TTL**
		
		- $.message.order.quote.ttl must be present in the payload
	
	- **ON_SELECT_ORDER_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **INIT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_CONTEXT_FIELDS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_COUNTRY**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_CITY**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_URI**
			
			- $.context.bpp_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_ID**
			
			- $.context.bpp_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM_VALIDATION** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- At least one of $.context.domain must be in ["ONDC:TRV13"]
	
	- **INIT_ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **INIT_ORDER_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_ITEM_ID**
		
		- $.message.order.items[*].id must be present in the payload
		
		#### **REQUIRED_ITEM_LOCATION_IDS**
		
		- $.message.order.items[*].location_ids[*] must be present in the payload
		
		#### **REQUIRED_ITEM_QUANTITY**
		
		- $.message.order.items[*].quantity.selected.count must be present in the payload
		
		#### **REQUIRED_ADDS_ON_IDS**
		
		- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **INIT_ORDER_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		#### **REQUIRED_PAYMENT_PARAMS**
		
		- $.message.order.payments[*].params.amount must be present in the payload
	
	- **INIT_ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BILLING_NAME**
		
		- $.message.order.billing.name must be present in the payload
		
		#### **REQUIRED_BILLING_ADDRESS**
		
		- $.message.order.billing.address must be present in the payload
		
		#### **REQUIRED_BILLING_STATE_NAME**
		
		- $.message.order.billing.state.name must be present in the payload
		
		#### **REQUIRED_BILLING_CITY_NAME**
		
		- $.message.order.billing.city.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**
		
		- $.message.order.billing.organization.descriptor.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**
		
		- $.message.order.billing.organization.address must be present in the payload
		
		#### **REQUIRED_BILLING_EMAIL**
		
		- $.message.order.billing.email must be present in the payload
		
		#### **REQUIRED_BILLING_PHONE**
		
		- $.message.order.billing.phone must be present in the payload
		
		#### **REQUIRED_BILLING_TAX_ID**
		
		- $.message.order.billing.tax_id must be present in the payload
	
	- **INIT_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_CUSTOMER_NAME**
		
		- $.message.order.fulfillments[*].customer.person.name must be present in the payload
		
		#### **REQUIRED_CUSTOMER_AGE**
		
		- $.message.order.fulfillments[*].customer.person.age must be present in the payload
		
		#### **REQUIRED_CUSTOMER_DOB**
		
		- $.message.order.fulfillments[*].customer.person.dob must be present in the payload
		
		#### **REQUIRED_CUSTOMER_GENDER**
		
		- $.message.order.fulfillments[*].customer.person.gender must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT**
		
		- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**
		
		- $.message.order.fulfillments[*].customer.contact.email must be present in the payload
	
	- **INIT_ORDER_TAGS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BAP_TERMS**
		
		- $.message.order.tags[?(@.descriptor.code=='BAP_TERMS')].list[*].descriptor.code must be present in the payload
		
		#### **REQUIRED_BUYER_FINDER_FEES**
		
		- $.message.order.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be present in the payload

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **ON_INIT_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_CONTEXT_FIELDS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_COUNTRY**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_CITY**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_URI**
			
			- $.context.bpp_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_ID**
			
			- $.context.bpp_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM_VALIDATION** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- At least one of $.context.domain must be in ["ONDC:TRV13"]
	
	- **ON_INIT_ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **ON_INIT_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_MESSAGE_ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **REQUIRED_MESSAGE_ITEMS_ADD_ONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
			
			#### **REQUIRED_ITEMS_LOCATIONS**
			
			- $.message.order.items[*].location_ids[*] must be present in the payload
			
			#### **REQUIRED_ITEMS_QUANTITY**
			
			- $.message.order.items[*].quantity.selected.count must be present in the payload
			
			#### **REQUIRED_ITEMS_ADDONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **ON_INIT_ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_QUOTE_PRICE**
		
		- $.message.order.quote.price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_CURRENCY**
		
		- $.message.order.quote.price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP**
		
		- $.message.order.quote.breakup[*].price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**
		
		- $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_TITLE**
		
		- $.message.order.quote.breakup[*].title must be present in the payload
		
		#### **REQUIRED_QUOTE_TTL**
		
		- $.message.order.quote.ttl must be present in the payload
	
	- **ON_INIT_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		#### **REQUIRED_PAYMENT_STATUS**
		
		- $.message.order.payments[*].status must be present in the payload
		
		#### **VALID_PAYMENT_STATUS**
		
		- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
	
	- **ON_INIT_ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BILLING_NAME**
		
		- $.message.order.billing.name must be present in the payload
		
		#### **REQUIRED_BILLING_ADDRESS**
		
		- $.message.order.billing.address must be present in the payload
		
		#### **REQUIRED_BILLING_STATE_NAME**
		
		- $.message.order.billing.state.name must be present in the payload
		
		#### **REQUIRED_BILLING_CITY_NAME**
		
		- $.message.order.billing.city.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**
		
		- $.message.order.billing.organization.descriptor.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**
		
		- $.message.order.billing.organization.address must be present in the payload
		
		#### **REQUIRED_BILLING_EMAIL**
		
		- $.message.order.billing.email must be present in the payload
		
		#### **REQUIRED_BILLING_PHONE**
		
		- $.message.order.billing.phone must be present in the payload
		
		#### **REQUIRED_BILLING_TAX_ID**
		
		- $.message.order.billing.tax_id must be present in the payload
	
	- **ON_INIT_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_CUSTOMER_NAME**
		
		- $.message.order.fulfillments[*].customer.person.name must be present in the payload
		
		#### **REQUIRED_CUSTOMER_AGE**
		
		- $.message.order.fulfillments[*].customer.person.age must be present in the payload
		
		#### **REQUIRED_CUSTOMER_DOB**
		
		- $.message.order.fulfillments[*].customer.person.dob must be present in the payload
		
		#### **REQUIRED_CUSTOMER_GENDER**
		
		- $.message.order.fulfillments[*].customer.person.gender must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT**
		
		- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**
		
		- $.message.order.fulfillments[*].customer.contact.email must be present in the payload
	
	- **ON_INIT_TAGS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_TAG_GROUPS**
		
		- $.message.order.tags[*].descriptor.code must be present in the payload
		
		#### **REQUIRED_TAG_VALUES**
		
		- $.message.order.tags[*].list[*].descriptor.code must be present in the payload
		
		#### **PAYMENT_TAG_GROUP**
		
		- All elements of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BUYER_FINDER_FEES", "BPP_TERMS"]
		
		#### **REQUIRED_PAYMENT_TAG_BPP_TERMS**
		
		- All elements of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["MAX_LIABILITY", "MAX_LIABILITY_CAP", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "TAX_NUMBER"]
		
		> **Skip if:**
		>
		>     - $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code is not in the payload

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_CONTEXT_FIELDS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_COUNTRY**
			
			- $.context.location.country.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_CITY**
			
			- $.context.location.city.code must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_TIMESTAMP**
			
			- $.context.timestamp must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_URI**
			
			- $.context.bap_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BAP_ID**
			
			- $.context.bap_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_URI**
			
			- $.context.bpp_uri must be present in the payload
			
			#### **REQUIRED_CONTEXT_BPP_ID**
			
			- $.context.bpp_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TTL**
			
			- $.context.ttl must be present in the payload
		
		- **CONTEXT_ENUM_VALIDATION** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_CONTEXT_COUNTRY_CODE**
			
			- At least one of $.context.location.country.code must be in ["IND"]
			
			#### **VALID_CONTEXT_DOMAIN**
			
			- At least one of $.context.domain must be in ["ONDC:TRV13"]
	
	- **CONFIRM_ORDER_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **CONFIRM_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_MESSAGE_ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **REQUIRED_MESSAGE_ITEMS_ADD_ONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
			
			#### **REQUIRED_ITEMS_LOCATIONS**
			
			- $.message.order.items[*].location_ids[*] must be present in the payload
			
			#### **REQUIRED_ITEMS_QUANTITY**
			
			- $.message.order.items[*].quantity.selected.count must be present in the payload
			
			#### **REQUIRED_ITEMS_ADDONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **CONFIRM_ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_QUOTE_PRICE**
		
		- $.message.order.quote.price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_CURRENCY**
		
		- $.message.order.quote.price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP**
		
		- $.message.order.quote.breakup[*].price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**
		
		- $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_TITLE**
		
		- $.message.order.quote.breakup[*].title must be present in the payload
		
		#### **REQUIRED_QUOTE_TTL**
		
		- $.message.order.quote.ttl must be present in the payload
	
	- **CONFIRM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		#### **REQUIRED_PAYMENT_STATUS**
		
		- $.message.order.payments[*].status must be present in the payload
		
		#### **VALID_PAYMENT_STATUS**
		
		- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
	
	- **CONFIRM_ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BILLING_NAME**
		
		- $.message.order.billing.name must be present in the payload
		
		#### **REQUIRED_BILLING_ADDRESS**
		
		- $.message.order.billing.address must be present in the payload
		
		#### **REQUIRED_BILLING_STATE_NAME**
		
		- $.message.order.billing.state.name must be present in the payload
		
		#### **REQUIRED_BILLING_CITY_NAME**
		
		- $.message.order.billing.city.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**
		
		- $.message.order.billing.organization.descriptor.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**
		
		- $.message.order.billing.organization.address must be present in the payload
		
		#### **REQUIRED_BILLING_EMAIL**
		
		- $.message.order.billing.email must be present in the payload
		
		#### **REQUIRED_BILLING_PHONE**
		
		- $.message.order.billing.phone must be present in the payload
		
		#### **REQUIRED_BILLING_TAX_ID**
		
		- $.message.order.billing.tax_id must be present in the payload
	
	- **CONFIRM_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_CUSTOMER_NAME**
		
		- $.message.order.fulfillments[*].customer.person.name must be present in the payload
		
		#### **REQUIRED_CUSTOMER_AGE**
		
		- $.message.order.fulfillments[*].customer.person.age must be present in the payload
		
		#### **REQUIRED_CUSTOMER_DOB**
		
		- $.message.order.fulfillments[*].customer.person.dob must be present in the payload
		
		#### **REQUIRED_CUSTOMER_GENDER**
		
		- $.message.order.fulfillments[*].customer.person.gender must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT**
		
		- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**
		
		- $.message.order.fulfillments[*].customer.contact.email must be present in the payload
	
	- **CONFIRM_TAGS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_TAG_GROUPS**
		
		- $.message.order.tags[*].descriptor.code must be present in the payload
		
		#### **PAYMENT_TAG_GROUP**
		
		- All elements of $.message.order.tags[*].descriptor.code must be in ["BAP_TERMS", "BUYER_FINDER_FEES", "BPP_TERMS"]
		
		#### **REQUIRED_PAYMENT_TAG_BPP_TERMS**
		
		- All elements of $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code must be in ["MAX_LIABILITY", "MAX_LIABILITY_CAP", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "TAX_NUMBER"]
		
		> **Skip if:**
		>
		>     - $.message.order.tags[?(@.descriptor.code=='BPP_TERMS')].list[*].descriptor.code is not in the payload
	
	- **CONFIRM_TIMESTAMPS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_CREATED_AT**
		
		- All elements of $.message.order.created_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$"]
		
		#### **REQUIRED_UPDATED_AT**
		
		- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **ON_CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_ORDER_ID**
			
			- $.message.order.id must be present in the payload
			
			#### **REQUIRED_ORDER_STATUS**
			
			- $.message.order.status must be present in the payload
			
			#### **VALID_ORDER_STATUS**
			
			- All elements of $.message.order.status must be in ["SOFT-CANCEL", "CONFIRM-CANCEL", "SOFT-UPDATE", "CONFIRM-UPDATE", "ACTIVE", "COMPLETE", "CANCELLED"]
			
			#### **REQUIRED_ON_CONFIRM_UPDATED_AT**
			
			- $.message.order.updated_at must be present in the payload
		
		- **VALID_ENUM_ON_CONFIRM_ORDER** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_ENUM_ORDER_STATUS**
			
			- At least one of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
			
			#### **REGEX_ON_CONFIRM_UPDATED_AT**
			
			- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_CONFIRM_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_MESSAGE_ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **REQUIRED_MESSAGE_ITEMS_ADD_ONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
			
			#### **REQUIRED_ITEMS_LOCATIONS**
			
			- $.message.order.items[*].location_ids[*] must be present in the payload
			
			#### **REQUIRED_ITEMS_QUANTITY**
			
			- $.message.order.items[*].quantity.selected.count must be present in the payload
			
			#### **REQUIRED_ITEMS_ADDONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **ON_CONFIRM_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_CUSTOMER_NAME**
		
		- $.message.order.fulfillments[*].customer.person.name must be present in the payload
		
		#### **REQUIRED_CUSTOMER_AGE**
		
		- $.message.order.fulfillments[*].customer.person.age must be present in the payload
		
		#### **REQUIRED_CUSTOMER_DOB**
		
		- $.message.order.fulfillments[*].customer.person.dob must be present in the payload
		
		#### **REQUIRED_CUSTOMER_GENDER**
		
		- $.message.order.fulfillments[*].customer.person.gender must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT**
		
		- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**
		
		- $.message.order.fulfillments[*].customer.contact.email must be present in the payload
	
	- **ON_CONFIRM_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **ON_CONFIRM_ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_QUOTE_PRICE**
		
		- $.message.order.quote.price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_CURRENCY**
		
		- $.message.order.quote.price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP**
		
		- $.message.order.quote.breakup[*].price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**
		
		- $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_TITLE**
		
		- $.message.order.quote.breakup[*].title must be present in the payload
		
		#### **REQUIRED_QUOTE_TTL**
		
		- $.message.order.quote.ttl must be present in the payload
	
	- **ON_CONFIRM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		#### **REQUIRED_PAYMENT_STATUS**
		
		- $.message.order.payments[*].status must be present in the payload
		
		#### **VALID_PAYMENT_STATUS**
		
		- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
	
	- **ON_CONFIRM_ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BILLING_NAME**
		
		- $.message.order.billing.name must be present in the payload
		
		#### **REQUIRED_BILLING_ADDRESS**
		
		- $.message.order.billing.address must be present in the payload
		
		#### **REQUIRED_BILLING_STATE_NAME**
		
		- $.message.order.billing.state.name must be present in the payload
		
		#### **REQUIRED_BILLING_CITY_NAME**
		
		- $.message.order.billing.city.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**
		
		- $.message.order.billing.organization.descriptor.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**
		
		- $.message.order.billing.organization.address must be present in the payload
		
		#### **REQUIRED_BILLING_EMAIL**
		
		- $.message.order.billing.email must be present in the payload
		
		#### **REQUIRED_BILLING_PHONE**
		
		- $.message.order.billing.phone must be present in the payload
		
		#### **REQUIRED_BILLING_TAX_ID**
		
		- $.message.order.billing.tax_id must be present in the payload
	
	- **ON_CONFIRM_TIMESTAMPS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_UPDATED_AT**
		
		- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$"]

- **status** : All the following sub conditions must pass as per the api requirement

	- **STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_CONFIRM_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	#### **REQUIRED_ORDER_ID**
	
	- $.message.order_id must be present in the payload

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **ON_STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_STATUS_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_STATUS_ORDER** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_ORDER_ID**
			
			- $.message.order.id must be present in the payload
			
			#### **REQUIRED_ORDER_STATUS**
			
			- $.message.order.status must be present in the payload
			
			#### **REQUIRED_ORDER_UPDATED_AT**
			
			- $.message.order.updated_at must be present in the payload
		
		- **VALID_ENUM_ON_STATUS_ORDER** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_ENUM_ORDER_STATUS**
			
			- At least one of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
			
			#### **REGEX_ON_STATUS_UPDATED_AT**
			
			- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_STATUS_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_MESSAGE_ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **REQUIRED_MESSAGE_ITEMS_ADD_ONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
			
			#### **REQUIRED_ITEMS_LOCATIONS**
			
			- $.message.order.items[*].location_ids[*] must be present in the payload
			
			#### **REQUIRED_ITEMS_QUANTITY**
			
			- $.message.order.items[*].quantity.selected.count must be present in the payload
			
			#### **REQUIRED_ITEMS_ADDONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **ON_STATUS_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_CUSTOMER_NAME**
		
		- $.message.order.fulfillments[*].customer.person.name must be present in the payload
		
		#### **REQUIRED_CUSTOMER_AGE**
		
		- $.message.order.fulfillments[*].customer.person.age must be present in the payload
		
		#### **REQUIRED_CUSTOMER_DOB**
		
		- $.message.order.fulfillments[*].customer.person.dob must be present in the payload
		
		#### **REQUIRED_CUSTOMER_GENDER**
		
		- $.message.order.fulfillments[*].customer.person.gender must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT**
		
		- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**
		
		- $.message.order.fulfillments[*].customer.contact.email must be present in the payload
	
	- **ON_STATUS_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **ON_STATUS_ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_QUOTE_PRICE**
		
		- $.message.order.quote.price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_CURRENCY**
		
		- $.message.order.quote.price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP**
		
		- $.message.order.quote.breakup[*].price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**
		
		- $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_TITLE**
		
		- $.message.order.quote.breakup[*].title must be present in the payload
		
		#### **REQUIRED_QUOTE_TTL**
		
		- $.message.order.quote.ttl must be present in the payload
	
	- **ON_STATUS_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		#### **REQUIRED_PAYMENT_STATUS**
		
		- $.message.order.payments[*].status must be present in the payload
		
		#### **VALID_PAYMENT_STATUS**
		
		- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
		
		- **VALID_ENUM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_ENUM_PAYMENTS_STATUS**
			
			- At least one of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
			
			#### **VALID_ENUM_PAYMENTS_TYPE**
			
			- At least one of $.message.order.payments[*].type must be in ["PRE-ORDER", "PART-PAYMENT", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		
		- **REQUIRED_PAYMENTS_LINKED_TAGS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_LINKED_PAYMENT_TAG**
			
			- At least one of $.message.order.payments[*].tags[*].descriptor.code must be in ["LINKED-PAYMENTS", "ADV-DEPOSIT", "FINAL-PAYMENT"]
	
	- **ON_STATUS_ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BILLING_NAME**
		
		- $.message.order.billing.name must be present in the payload
		
		#### **REQUIRED_BILLING_ADDRESS**
		
		- $.message.order.billing.address must be present in the payload
		
		#### **REQUIRED_BILLING_STATE_NAME**
		
		- $.message.order.billing.state.name must be present in the payload
		
		#### **REQUIRED_BILLING_CITY_NAME**
		
		- $.message.order.billing.city.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**
		
		- $.message.order.billing.organization.descriptor.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**
		
		- $.message.order.billing.organization.address must be present in the payload
		
		#### **REQUIRED_BILLING_EMAIL**
		
		- $.message.order.billing.email must be present in the payload
		
		#### **REQUIRED_BILLING_PHONE**
		
		- $.message.order.billing.phone must be present in the payload
		
		#### **REQUIRED_BILLING_TAX_ID**
		
		- $.message.order.billing.tax_id must be present in the payload
	
	- **ON_STATUS_TAGS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_TAGS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_TAGS_DESCRIPTOR_CODE**
			
			- $.message.order.tags[*].descriptor.code must be present in the payload
			
			#### **REQUIRED_TAGS_LIST_DESCRIPTOR_CODE**
			
			- $.message.order.tags[*].list[*].descriptor.code must be present in the payload
			
			#### **REQUIRED_TAGS_LIST_VALUE**
			
			- $.message.order.tags[*].list[*].value must be present in the payload
	
	- **ON_STATUS_DOCUMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_DOCUMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_DOCUMENTS_DESCRIPTOR_CODE**
			
			- $.message.order.documents[*].descriptor.code must be present in the payload
			
			#### **REQUIRED_DOCUMENTS_URL**
			
			- $.message.order.documents[*].url must be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_STATUS_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **UPDATE_MESSAGE_1** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_UPDATE_TARGET**
		
		- $.message.update_target must be present in the payload
		
		#### **VALID_UPDATE_TARGET**
		
		- At least one of $.message.update_target must be in ["fulfillment", "payment", "billing", "items"]
		
		#### **REQUIRED_ORDER_ID**
		
		- $.message.order.id must be present in the payload
		
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_TAG_DESCRIPTOR_CODE**
		
		- $.message.order.fulfillments[*].tags[*].descriptor.code must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.order.fulfillments[*].tags[*].descriptor.code is not in the payload
		
		#### **VALID_TAG_DESCRIPTOR_CODE**
		
		- At least one of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["UPDATE_REQUEST", "MODIFY"]
		
		#### **REQUIRED_TAG_LIST_DESCRIPTOR_CODE**
		
		- $.message.order.fulfillments[*].tags[*].list[*].descriptor.code must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.order.fulfillments[*].tags[*].list[*].descriptor.code is not in the payload
		
		#### **REQUIRED_TAG_LIST_VALUE**
		
		- $.message.order.fulfillments[*].tags[*].list[*].value must be present in the payload
		
		> **Skip if:**
		>
		>     - $.message.order.fulfillments[*].tags[*].list[*].value is not in the payload

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **ON_UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_UPDATE_ORDER** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_UPDATE_ORDER** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_ORDER_ID**
			
			- $.message.order.id must be present in the payload
			
			#### **REQUIRED_ORDER_STATUS**
			
			- $.message.order.status must be present in the payload
			
			#### **REQUIRED_ORDER_UPDATED_AT**
			
			- $.message.order.updated_at must be present in the payload
		
		- **VALID_ENUM_ON_UPDATE_ORDER** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_ENUM_ORDER_STATUS**
			
			- At least one of $.message.order.status must be in ["SOFT-CANCEL", "CONFIRM-CANCEL", "SOFT-UPDATE", "CONFIRM-UPDATE", "ACTIVE", "COMPLETE", "CANCELLED"]
			
			#### **REGEX_ON_UPDATE_UPDATED_AT**
			
			- All elements of $.message.order.updated_at must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_UPDATE_ITEMS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ITEMS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_MESSAGE_ITEMS_ID**
			
			- $.message.order.items[*].id must be present in the payload
			
			#### **REQUIRED_MESSAGE_ITEMS_ADD_ONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
			
			#### **REQUIRED_ITEMS_LOCATIONS**
			
			- $.message.order.items[*].location_ids[*] must be present in the payload
			
			#### **REQUIRED_ITEMS_QUANTITY**
			
			- $.message.order.items[*].quantity.selected.count must be present in the payload
			
			#### **REQUIRED_ITEMS_ADDONS**
			
			- $.message.order.items[*].add_ons[*].id must be present in the payload
	
	- **ON_UPDATE_ORDER_FULFILLMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_FULFILLMENT_ID**
		
		- $.message.order.fulfillments[*].id must be present in the payload
		
		#### **REQUIRED_CUSTOMER_NAME**
		
		- $.message.order.fulfillments[*].customer.person.name must be present in the payload
		
		#### **REQUIRED_CUSTOMER_AGE**
		
		- $.message.order.fulfillments[*].customer.person.age must be present in the payload
		
		#### **REQUIRED_CUSTOMER_DOB**
		
		- $.message.order.fulfillments[*].customer.person.dob must be present in the payload
		
		#### **REQUIRED_CUSTOMER_GENDER**
		
		- $.message.order.fulfillments[*].customer.person.gender must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT**
		
		- $.message.order.fulfillments[*].customer.contact.phone must be present in the payload
		
		#### **REQUIRED_CUSTOMER_CONTACT_EMAIL**
		
		- $.message.order.fulfillments[*].customer.contact.email must be present in the payload
	
	- **ON_UPDATE_PROVIDER** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PROVIDER_ID**
		
		- $.message.order.provider.id must be present in the payload
	
	- **ON_UPDATE_ORDER_QUOTE** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_QUOTE_PRICE**
		
		- $.message.order.quote.price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_CURRENCY**
		
		- $.message.order.quote.price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP**
		
		- $.message.order.quote.breakup[*].price.value must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_PRICE_CURRENCY**
		
		- $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		#### **REQUIRED_QUOTE_BREAKUP_TITLE**
		
		- $.message.order.quote.breakup[*].title must be present in the payload
		
		#### **REQUIRED_QUOTE_TTL**
		
		- $.message.order.quote.ttl must be present in the payload
	
	- **ON_UPDATE_PAYMENTS** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_PAYMENT_ID**
		
		- $.message.order.payments[*].id must be present in the payload
		
		#### **REQUIRED_PAYMENT_TYPE**
		
		- $.message.order.payments[*].type must be present in the payload
		
		#### **VALID_PAYMENT_TYPES**
		
		- All elements of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "PART-PAYMENT"]
		
		#### **REQUIRED_PAYMENT_STATUS**
		
		- $.message.order.payments[*].status must be present in the payload
		
		#### **VALID_PAYMENT_STATUS**
		
		- All elements of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
		
		- **VALID_ENUM_PAYMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **VALID_ENUM_PAYMENTS_STATUS**
			
			- At least one of $.message.order.payments[*].status must be in ["PAID", "NOT-PAID"]
			
			#### **VALID_ENUM_PAYMENTS_TYPE**
			
			- At least one of $.message.order.payments[*].type must be in ["PRE-ORDER", "PART-PAYMENT", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		
		- **REQUIRED_PAYMENTS_LINKED_TAGS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_LINKED_PAYMENT_TAG**
			
			- At least one of $.message.order.payments[*].tags[*].descriptor.code must be in ["LINKED-PAYMENTS", "ADV-DEPOSIT", "FINAL-PAYMENT"]
	
	- **ON_UPDATE_ORDER_BILLING** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_BILLING_NAME**
		
		- $.message.order.billing.name must be present in the payload
		
		#### **REQUIRED_BILLING_ADDRESS**
		
		- $.message.order.billing.address must be present in the payload
		
		#### **REQUIRED_BILLING_STATE_NAME**
		
		- $.message.order.billing.state.name must be present in the payload
		
		#### **REQUIRED_BILLING_CITY_NAME**
		
		- $.message.order.billing.city.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_DESCRIPTOR_NAME**
		
		- $.message.order.billing.organization.descriptor.name must be present in the payload
		
		#### **REQUIRED_BILLING_ORGANIZATION_ADDRESS**
		
		- $.message.order.billing.organization.address must be present in the payload
		
		#### **REQUIRED_BILLING_EMAIL**
		
		- $.message.order.billing.email must be present in the payload
		
		#### **REQUIRED_BILLING_PHONE**
		
		- $.message.order.billing.phone must be present in the payload
		
		#### **REQUIRED_BILLING_TAX_ID**
		
		- $.message.order.billing.tax_id must be present in the payload
	
	- **ON_UPDATE_TAGS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_TAGS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_TAGS_DESCRIPTOR_CODE**
			
			- $.message.order.tags[*].descriptor.code must be present in the payload
			
			#### **REQUIRED_TAGS_LIST_DESCRIPTOR_CODE**
			
			- $.message.order.tags[*].list[*].descriptor.code must be present in the payload
			
			#### **REQUIRED_TAGS_LIST_VALUE**
			
			- $.message.order.tags[*].list[*].value must be present in the payload
	
	- **ON_UPDATE_DOCUMENTS** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_DOCUMENTS** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_DOCUMENTS_DESCRIPTOR_CODE**
			
			- $.message.order.documents[*].descriptor.code must be present in the payload
			
			#### **REQUIRED_DOCUMENTS_URL**
			
			- $.message.order.documents[*].url must be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **CANCEL_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **CANCEL_MESSAGE_1** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_CANCELLATION_ID**
		
		- $.message.cancellation_reason_id must be present in the payload
		
		#### **REQUIRED_CANCELLATION_SHORT_DESC**
		
		- $.message.descriptor.short_desc must be present in the payload
		
		#### **REQUIRED_CANCELLATION_LONG_DESC**
		
		- $.message.descriptor.long_desc must be present in the payload
		
		#### **REQUIRED_ORDER_ID**
		
		- $.message.order_id must be present in the payload
		
		#### **VALID_CANCELLATION_REASON_ID**
		
		- At least one of $.message.cancellation_reason_id must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **ON_CANCEL_CONTEXT** : All the following sub conditions must pass as per the api requirement
	
		- **REQUIRED_ON_UPDATE_CONTEXT** : All the following sub conditions must pass as per the api requirement
		
			#### **REQUIRED_CONTEXT_DOMAIN**
			
			- $.context.domain must be present in the payload
			
			#### **REQUIRED_CONTEXT_ACTION**
			
			- $.context.action must be present in the payload
			
			#### **REQUIRED_CONTEXT_VERSION**
			
			- $.context.version must be present in the payload
			
			#### **REQUIRED_CONTEXT_MESSAGE_ID**
			
			- $.context.message_id must be present in the payload
			
			#### **REQUIRED_CONTEXT_TRANSACTION_ID**
			
			- $.context.transaction_id must be present in the payload
			
			#### **REGEX_CONTEXT_TIMESTAMP**
			
			- All elements of $.context.timestamp must follow every regex in ["^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$"]
	
	- **ON_CANCEL_MESSAGE_1** : All the following sub conditions must pass as per the api requirement
	
		#### **REQUIRED_ORDER_ID**
		
		- $.message.order.id must be present in the payload
		
		#### **REQUIRED_ORDER_STATUS**
		
		- $.message.order.status must be present in the payload
		
		#### **VALID_ORDER_STATUS**
		
		- At least one of $.message.order.status must be in ["CANCELLED"]
		
		#### **REQUIRED_CANCELLED_BY**
		
		- $.message.order.cancellation.cancelled_by must be present in the payload
		
		#### **REQUIRED_CANCELLATION_REASON_ID**
		
		- $.message.order.cancellation.reason.id must be present in the payload
		
		#### **REQUIRED_UPDATED_AT**
		
		- $.message.order.updated_at must be present in the payload
		
		#### **VALID_CANCELLATION_REASON_ID**
		
		- At least one of $.message.order.cancellation.reason.id must be in ["000", "001", "002", "003", "004", "005", "011", "012", "013", "014"]