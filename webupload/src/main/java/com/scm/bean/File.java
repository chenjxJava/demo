package com.scm.bean;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by admin on 2017-07-21.
 */
public class File {
	//文件id
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="file_id")
	private int fileId;

	//文件所属模块
	@Column(name="file_model")
	private String fileModel;

	//文件原名
	@Column(name="file_name")
	private String fileName;

	//文件存储路径
	@Column(name="file_path")
	private String filePath;

	//文件所属模块相对应的id
	@Column(name="file_record")
	private Long fileRecord;

	//文件大小
	@Column(name="file_size")
	private Long fileSize;

	//记录创建时间
	@Column(name="file_time")
	private Timestamp fileTime;

	//文件类型
	@Column(name="file_type")
	private String fileType;

	public int getFileId() {
		return fileId;
	}

	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

	public String getFileModel() {
		return fileModel;
	}

	public void setFileModel(String fileModel) {
		this.fileModel = fileModel;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public Long getFileRecord() {
		return fileRecord;
	}

	public void setFileRecord(Long fileRecord) {
		this.fileRecord = fileRecord;
	}

	public Long getFileSize() {
		return fileSize;
	}

	public void setFileSize(Long fileSize) {
		this.fileSize = fileSize;
	}

	public Timestamp getFileTime() {
		return fileTime;
	}

	public void setFileTime(Timestamp fileTime) {
		this.fileTime = fileTime;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
}
