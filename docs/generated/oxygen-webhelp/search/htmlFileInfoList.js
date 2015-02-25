fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/DataCollectorAdministration.html@@@Data Collector Administration@@@You can view configuration properties, logs, and JVM metrics from the Administration menu. You can also shut down the Data Collector...";
fil["2"]= "Administration/ShuttingDown.html@@@Shutting Down the Data Collector@@@Shut down and restart the Data Collector to apply changes to the Data Collector properties file or user logins...";
fil["3"]= "Administration/ViewingDCConfigs.html@@@Viewing Data Collector Configuration Properties@@@To view Data Collector configuration properties, click Administration &gt; Configuration . For details about the configuration properties or to edit the properties file, see Customizing the Dat...";
fil["4"]= "Administration/ViewingJVMMetrics.html@@@Viewing JVM Metrics@@@The Data Collector provides JVM metrics for the Data Collector...";
fil["5"]= "Administration/ViewingLogData.html@@@Viewing Data Collector Logs@@@To view log data for the Data Collector , click Administration &gt; Logs...";
fil["6"]= "Data_Preview/DataCollectorWindow-Preview.html@@@Data Collector Console - Preview Mode@@@When you preview data, the Preview panel uses different colors to represent different types of data. The Preview panel also uses colors, italics, and asterisks to highlight the field values and records that you have changed for testing...";
fil["7"]= "Data_Preview/DataPreview.html@@@Data Preview@@@You can edit preview data to view how a stage or group of stages processes the changed data. Edit preview data to test for data conditions that might not appear in data preview...";
fil["8"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["9"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a group of linked stages within a pipeline. You can also edit the preview data to see how the group processes your changes. Preview multiple stages to verify that the group processes data as expected...";
fil["10"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing a Single Stage@@@You can preview data for a single stage. In the Preview panel, you can drill down to review the values for each record to determine if the stage transforms data as expected. You can also edit the...";
fil["11"]= "Destinations/Destinations-title.html@@@Destinations@@@...";
fil["12"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target for a pipeline. You can use one or more destinations in a pipeline...";
fil["13"]= "Destinations/HadoopFS.html@@@Hadoop FS@@@You can add custom Hadoop configuration properties to the Hadoop FS destination...";
fil["14"]= "Destinations/KProducer.html@@@Kafka Producer@@@You can add custom Kafka configuration properties to the Kafka Producer...";
fil["15"]= "Destinations/SDCRecordFiles.html@@@SDC Record Files@@@Configure the SDC Record File destination to write SDC Record files to a local file system...";
fil["16"]= "Destinations/Trash.html@@@Trash@@@The Trash destination discards all records. Use the Trash destination as a visual representation of records discarded from the pipeline. Or you might use the Trash destination during development as a placeholder for a different destination...";
fil["17"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@Stage paths appear in error records. They indicate the path that a record took through the pipeline before becoming an error record...";
fil["18"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["19"]= "Expression_Language/Functions.html@@@Functions@@@Use string functions to transform string dat...";
fil["20"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["21"]= "Expression_Language/Operators.html@@@Operators@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["22"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["23"]= "Getting_Started/DCollector_Window.html@@@Data Collector Console@@@The Data Collector console provides a user interface to configure pipelines, preview data, monitor pipelines, and view a snapshot...";
fil["24"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["25"]= "Getting_Started/InstallationAndConfig.html@@@Installation and Configuration@@@You can install a new stage by untarring the stage library and copying files...";
fil["26"]= "Getting_Started/LocalandHostedHelp.html@@@Local and Hosted Help@@@The Data Collector can use a local help project or a help project hosted on the StreamSets website. Both help projects provide context-sensitive help...";
fil["27"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In and Creating a Pipeline@@@After you start the Data Collector, you can log in to the Data Collector console and create your first pipeline...";
fil["28"]= "Getting_Started/What_isa_DataCollector.html@@@What is a Data Collector?@@@Let s walk through it...";
fil["29"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@data alerts Alerts based on rules that gather information about the data that passes between two stages. destination A stage type used in a pipeline to represent where the Data Collector writes...";
fil["30"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["31"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory. When you configure a Directory, you define file properties, including the data format to process. Then, you define post-processing options and the properties specific to the data format...";
fil["32"]= "Origins/FileTail.html@@@File Tail@@@Configure a File Tail origin to read data as it is written to a file. You can read text or JSON dat...";
fil["33"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read data from a Kafka cluster. When you configure the Kafka Consumer, you configure the general properties, including Kafka and ZooKeeper details. For delimited and JSON data, configure additional related properties. You can optionally add custom Kafka properties...";
fil["34"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data when you configure an origin. Preview raw source data when reviewing the data might help with origin configuration...";
fil["35"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["36"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["37"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Console - Edit Mode@@@The following image shows the Data Collector console when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the pipeline data flow. 2...";
fil["38"]= "Pipeline_Configuration/DeliveryGuarantee.html@@@Delivery Guarantee@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data, or do you want to prevent the duplication of dat...";
fil["39"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Handling@@@You can use a Directory origin in a error pipeline to reprocess error record files. When you reprocess error record files, do not edit or rename the files. The Directory origin expects the files as generated by the original pipeline...";
fil["40"]= "Pipeline_Configuration/MergingStreams.html@@@Merging Streams@@@You can merge streams of data in a pipeline by connecting two or more stages to the same downstream stage. When you merge streams of data, the Data Collector channels the data from all streams to the same stage, but does not perform a join of records in the stream...";
fil["41"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["42"]= "Pipeline_Configuration/ReplicatingStreams.html@@@Replicating Streams@@@When you connect a stage to multiple stages, the stage passes all data to all connected stages. You can configure required fields for connected stages to discard records before they enter the stage, but by default all records are passed...";
fil["43"]= "Pipeline_Configuration/RequiredFields.html@@@Required Fields@@@You can configure required fields for any processor and most destination stages. A required field must exist in a record to allow the record to enter the stage for processing. When a record does not include a required field, the stage passes the record to the pipeline for error handling...";
fil["44"]= "Pipeline_Configuration/SDCRecordFormat.html@@@SDC Record Data Format@@@SDC Record is a data format used by the Data Collector to generate error record files for the pipeline. The Data Collector can also use the SDC Record format to generate output files...";
fil["45"]= "Pipeline_Configuration/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data for the Data Collector...";
fil["46"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. If you think you might want to archive a pipeline, you might export the pipeline before you delete it. In the...";
fil["47"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["48"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline when you want to use the pipeline with another Data Collector. You might also export pipelines to keep a backup...";
fil["49"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector or to restore a backup file...";
fil["50"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["51"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["52"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["53"]= "Pipeline_Monitoring/DataAlerts.html@@@Data Rules and Alerts@@@Data rules define the information that you want to see about the data that passes between stages. You can create data rules based on any link in the pipeline. You can also create alerts based on the data rules...";
fil["54"]= "Pipeline_Monitoring/DataCollectorWindow-Monitor.html@@@Data Collector Console - Monitor Mode@@@In Monitor mode, you can use the Data Collector console to view data as it passes through the pipeline...";
fil["55"]= "Pipeline_Monitoring/EmailforAlerts-Configuring.html@@@Configuring Email for Alerts@@@You can define the email addresses to receive metric and data alerts. When an alert triggers an email, the Data Collector sends an email to every address in the list...";
fil["56"]= "Pipeline_Monitoring/MetricAlerts.html@@@Metric Alerts@@@Create a metric alert to receive monitoring or email alerts based on metric rules. You can configure metric alerts when you configure or monitor a pipeline. You can edit or delete alerts when they are not active...";
fil["57"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline, examine a sample of the data being processed, and create rules and alerts...";
fil["58"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["59"]= "Pipeline_Monitoring/ReviewingSnapshotData.html@@@Reviewing a Snapshot of Data@@@You can review a snapshot of data that passed through the pipeline. When you request a snapshot, the Data Collector takes a snapshot of the data being processed. You can then review the snapshot stage by stage or through a group of stages, like data preview...";
fil["60"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline...";
fil["61"]= "Processors/ConfiguringExpressionsConditions.html@@@Configuring Expressions and Conditions@@@You can define constants that you can reuse within a processor. Define a constant when you have a value that you want use more than once in the processor or that you want to be able to update easily. You can define constants in the Expression Evaluator and Stream Selector processors...";
fil["62"]= "Processors/Expression.html@@@Expression Evaluator@@@Configure an Expression Evaluator to perform calculations on records on a row-by-row basis...";
fil["63"]= "Processors/FieldConverter.html@@@Field Converter@@@Configure a Field Converter to convert the data type of a field...";
fil["64"]= "Processors/FieldHasher.html@@@Field Hasher@@@Configure a Field Hasher to encode sensitive dat...";
fil["65"]= "Processors/FieldMasker.html@@@Field Masker@@@Configure a Field Masker to mask sensitive dat...";
fil["66"]= "Processors/FieldRemover.html@@@Field Remover@@@Use a Field Remover to remove unwanted fields from the pipeline...";
fil["67"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data based on a separator character and passes the separated data to new fields. Use the Field Splitter to split complex string values into logical components...";
fil["68"]= "Processors/JSONParser.html@@@JSON Parser@@@Use a JSON Parser to parse a JSON object in a String field...";
fil["69"]= "Processors/Processors_overview.html@@@Processors@@@At various points in a pipeline, you can use preview data to help select fields. Preview data displays when a pipeline is configured to a point where you can to perform a data preview...";
fil["70"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["71"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@Use a Record Deduplicator to route or remove records with duplicate dat...";
fil["72"]= "Processors/StreamSelector.html@@@Stream Selector@@@When a record does not match any condition, the Stream Selector can use the error handling for unmatched records or you can configure a default stream that accepts the unmatched records...";
fil["73"]= "Processors/StreamSelector_Conditions.html@@@Configuring Conditions@@@Configure a condition for each stream of data that you want to route. The Stream Selector passes all data that matches the condition to the stream...";
fil["74"]= "Processors/ValueReplacer.html@@@Value Replacer@@@The Value Replacer replaces null values in a field with a constant. The Value Replacer can also replace existing values in a field with Nulls...";
fil["75"]= "Troubleshooting/Troubleshooting.html@@@Troubleshooting@@@Use the following tips to help you with the Data Collector. If you have suggestions for additional items, feel free to send them to docs@streamsets.com...";
fil["76"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
