<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
	<items>
		<xsl:for-each select="files/file">
			<item>
				<id><xsl:value-of select="id"/></id>
				<filename><xsl:value-of select="filename"/></filename>
				<file_url><xsl:value-of select="filepath"/></file_url>
				<metadata>
					<size>10</size>
					<xsl:variable name="raw" select="creation_date"/>
					<xsl:variable name="dt" select="concat(
							substring($raw,7,4),'-',
							substring($raw,4,2),'-',
							substring($raw,1,2),'T',
							substring($raw,12,5),':00+01:00')"/>
					<creation_date><xsl:value-of select="$dt"/></creation_date>
					<mimetype>
						<xsl:if test="filetype='txt'">txt/plain</xsl:if>
						<xsl:if test="filetype='jpeg'">image/jpeg</xsl:if>
						<xsl:if test="filetype='mp3'">audio/mpeg3</xsl:if>
					</mimetype>
					<thumbnail_available>false</thumbnail_available>
				</metadata>
			</item>
		</xsl:for-each>
	</items>
</xsl:template>
</xsl:stylesheet>
